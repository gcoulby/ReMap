<template>
    <div id="keycap" class="relative flex cursor-pointer" :style="{
            marginTop: (config.y as number) * 54 + 'px', 
            marginLeft: (config.x as number) * 54 + 'px',
            width: (config.w as number) * 54 + 'px',
            height: (config.h as number) * 54 + 'px'
        }" @click="useSelectedKey.set(config.code as string)">
        <div id="keyborder" class="absolute w-full h-full rounded border-2 flex flex-col justify-between items-center bg-[#1b1b1b] shadow-lg" :class="[config.code === useSelectedKey.get() ? 'border-green-500' : 'border-black']" ></div>
        <div id="keytop" class="absolute top-[3px] left-[6px] rounded border-1 border-black bg-[#363636] shadow-lg" :style="{
            width: (config.w as number) * 54 - 12 + 'px',
            height: (config.h as number) * 54 - 12 + 'px'
        }"></div>
        <div id="keylabels" class="absolute top-[3px] left-[6px] flex flex-col w-full select-none">
            <KeyLabel v-for="label in config.labels" :label="label"></KeyLabel>
        </div>
    </div>
</template>


<script setup lang="ts">

import { KeyOptions } from '../types';
import KeyLabel from './KeyLabel.vue';
import { useSelectedKey } from '../composables/useSelectedKey';



    defineProps({
        config : {
            type: Object as () => KeyOptions,
            required: true
        }
    })
</script>
