<template>
    <div id="keyrow" class="absolute flex flex-row justify-start" :style="{
        marginTop: (props.index * KEY_SIZE) + 'px'
    
    }">
        <template v-for="config in computedConfigurations">
            <KeyCap v-if="config.hasOwnProperty('labels')" :config="config"></KeyCap>
        </template>
    </div>
</template>

<script setup lang="ts">
import KeyCap from './KeyCap.vue';
import { KeyOptions } from '../types';
import { computed } from 'vue';
import { useRowOffset } from '../composables/useRowOffset';
import { KEY_SIZE } from '../composables/useDefaultDimensions';

    const props = defineProps({
        configuration : {
            type: Array as () => KeyOptions[],
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    })

    const computedConfigurations = computed((): KeyOptions[] => {
        let x = 0;
        let y = useRowOffset(); 
        let w = 1;
        let h = 1;
        return props.configuration.map((key) => {
            if (key.labels !== undefined) {
                key.x = x;
                key.y = y;
                key.w = w;
                key.h = h;

                x = 0;
                w = 1;
                h = 1;
                return key;
            } else {
                if (key.hasOwnProperty('x')) {
                    x = key.x as number;
                } if (key.hasOwnProperty('y')) {
                    y = useRowOffset(key.y as number);
                } if (key.hasOwnProperty('w')) {
                    w = key.w as number;
                } if (key.hasOwnProperty('h')) {
                    h = key.h as number;
                }

                return key;
            }
        })
    })

    console.log(computedConfigurations.value);
</script>