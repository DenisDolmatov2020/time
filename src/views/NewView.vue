<template>
  <div class="cart">
    <h2 class="title"> New Time Capsule </h2>
    <form>
      <span>Message</span>
      <textarea class="field message" name="message" />

      <span>Media (image/video/audio)</span>
      <input type="file" class="field file" name="media">
      <br>

      <DatePicker />

      <hr>

      <button class="btn">
        Create One
      </button>

    </form>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PostApi from '@/api/PostApi'
import { PostsResponse } from '@/types/Post'
import DatePicker from '@/components/DatePicker.vue'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzBlMjA2NWFiZDRkODA2ZDk1ZmIxNCIsImlhdCI6MTY2ODg4MDYzOCwiZXhwIjoxNjY4OTY3MDM4fQ.2EVDOno0btvweBWPqM9qoPZfvSP9-LSu6lWKXRl8KZg')

const post = ref({
  message: '',
  showAt: new Date(Date.now()).toISOString()
})

PostApi.create(post.value)
  .then((response: PostsResponse) => console.log(response))
  .catch((e: Error) => { console.error(e) })
</script>

<style lang="scss" scoped>
$text-color: #fff;

.btn {
  font-family: 'Montserrat', sans-serif;
  color: $text-color;
  font-size: 14px;
  letter-spacing: 1px;
  background-color: #1161ed;
  width: 100%;
  padding: 10px 20px;
  display: block;
  height: 39px;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  border: none;
  text-transform: uppercase;

  &:hover {
    background: #4082f5;
    box-shadow: 0 4px 35px -5px #4082f5;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
}

.cart {
  position: relative;
  text-align: center;
  width: 360px;
  margin: -70px auto 135px;
  z-index: 1;
  padding: 0 60px 20px;
  background: #505050;
  background-size: cover;
  box-shadow: 0 30px 60px -5px #000;
}

h2 {
  color: $text-color;
  font-size: 22px;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 100;
  border-bottom: 2px solid #1161ed;
}

span {
  color: $text-color;
  text-transform: uppercase;
  font-size: 12px;
  display: inline-block;
  position: relative;
  transition: all 0.5s ease-in-out;
}

.field {
  color: #000000;
  height: 20px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 94%;
  padding: 10px;
  display: block;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  overflow: hidden;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;

  &:focus {
    color: $text-color;
    outline: 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    background: rgba(0, 0, 0, 0);
  }
}

textarea {
  height: 50px;
  margin-bottom: 10px;
  resize: vertical;
}

label {
  display: inline-block;
  padding-top: 10px;
}

hr {
  border: 1px solid rgba(255, 255, 255, 1);
  margin: 30px;
}

</style>
