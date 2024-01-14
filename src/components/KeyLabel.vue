<template>
    <div id="keylabel" class="w-full px-1 text-left flex text-xs" >
        {{ label }}
    </div>
</template>

<script setup lang="ts">
    
        defineProps({
            label : {
                type: String,
                required: true
            }
        })
</script>
