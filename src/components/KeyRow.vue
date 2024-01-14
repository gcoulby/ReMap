<template>
    <div id="keyrow" class="absolute flex flex-row justify-start" :style="{
        marginTop: (props.index * 54) + 'px'
    
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

    const props = defineProps({
        configuration : {
            type: Array as () => (string | KeyOptions)[],
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
        let wi = 1;
        let h = 1;
        return props.configuration.map((key) => {
            if (typeof key === 'string') {
                let labels = key.split('\n');
                let newKey = {x: x, y: y, w: w, wi: wi, h: h, labels: labels}
                x = 0;
                w = 1;
                wi = 1;
                h = 1;
                return newKey;
            } else {
                if (key.hasOwnProperty('x')) {
                    x = key.x as number;
                } if (key.hasOwnProperty('y')) {
                    y = useRowOffset(key.y as number);
                } if (key.hasOwnProperty('w')) {
                    w = key.w as number;
                    
                    if (key.w as number < 1.5) {
                        wi = key.w as number + (key.w as number * 0.08);
                    } else if (key.w as number < 2) {
                        wi = key.w as number + (key.w as number * 0.1);
                    } else if (key.w as number <= 2) {
                        wi = 2.25;
                    } else if (key.w as number <= 2.25) {
                        wi = 2.55;
                    } else if (key.w as number <= 2.75) {
                        wi = 3.25;
                    } else if (key.w as number <= 3) {
                        wi = 3.75
                    } else if (key.w as number > 2) {
                        wi = key.w as number + (key.w as number * 0.24);
                    }
                    
                } if (key.hasOwnProperty('h')) {
                    h = key.h as number;
                }

                return key;
            }
        })
    })

    console.log(computedConfigurations.value);
</script>