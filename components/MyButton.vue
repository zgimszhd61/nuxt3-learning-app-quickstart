<template>
    <button @click="handleClick" class="my-button">
      {{ buttonText }}
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    buttonText: {
      type: String,
      default: '点击我'
    }
  })
  
  const emit = defineEmits(['buttonClicked'])
  
  const handleClick = () => {
    emit('buttonClicked')
  }
  </script>
  
  <style scoped>
  .my-button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>