<template>
    <div id="keycap" class="relative flex" :style="{
            marginTop: (config.y as number) * 54 + 'px', 
            marginLeft: (config.x as number) * 54 + 'px',
            width: (config.w as number) * 54 + 'px',
            height: (config.h as number) * 54 + 'px'
        }">
        <div id="keyborder" class="absolute w-full h-full rounded border-1 border-black flex flex-col justify-between items-center bg-[#1b1b1b] shadow-xl" ></div>
        <div id="keytop" class="absolute top-[3px] left-[6px] rounded border-1 border-black bg-[#363636] shadow-2xl" :style="{
            width: (config.wi as number) * 42 + 'px',
            height: (config.h as number) > 1 ? ((config.h as number) + (config.h as number) * 0.14) * 42 + 'px': (config.h as number) * 42 + 'px'
        }"></div>
        <div id="keylabels" class="absolute top-[3px] left-[6px] flex flex-col w-full">
            <KeyLabel v-for="label in config.labels" :label="label"></KeyLabel>
        </div>
    </div>
</template>

<script setup lang="ts">

import { KeyOptions } from '../types';
import KeyLabel from './KeyLabel.vue';
    defineProps({
        config : {
            type: Object as () => KeyOptions,
            required: true
        }
    })
</script>
