<template>
        <!-- sidebar -->
      <div class="allll margin-top-[100px]">
        <div>
        <p class="font-family text-3xl">Отдых</p>
        <div class="font-normal mt-24">
            <p><router-link to="/">Тур-агенство</router-link></p>
            <p class="mt-6"><router-link to="/posts">Горящие путевки</router-link></p>
            <p class="mt-6">Категории</p> 
            <p class="mt-6">Настройки</p>
            <p class="mt-6">Путешествия</p>
            <p class="mt-6"><router-link to="/info">О разработчике</router-link></p>
        </div>
        </div>

        <!--<div class="flex items-center px-6 py-4 mb-4 rounded-2xl w-max mx-auto" >
            <img src="/asset/book.png" alt="">
            <div class="ml-3">
                <p class="font-normal">User Guide</p>
                <p class="font-light text-sm">Documentation</p>
            </div>
        </div>-->

      </div>
      <!-- end sidebar -->
      <!-- sidebar mobile & tablet 
      <div class="fixed top-0 left-0 w-screen h-screen bg-[#00000041] lg:hidden" :class="sidebarmobile ? 'block' : 'hidden' " @click="tutupside"></div>
      <div class="h-screen fixed top-0 bg-[#f38f70] flex lg:hidden flex-col items-center justify-between pt-24 text-white overflow-y-auto transition-all" :class="sidebarmobile ? 'w-[70vw] md:w-[60vw]' : 'w-0' ">
        <div>
        <p class="font-semibold text-4xl">Blog.com</p>
        <div class="font-normal mt-24">
            <p><router-link to="/">Dashboard</router-link></p>
            <p class="mt-6"><router-link to="/posts">Posts</router-link></p>-->
            <!--<p class="mt-6"><a href="/">Categories</a></p>
            <p class="mt-6"><a href="/">Media</a></p></p>-->
            <!--<p class="mt-6"><a href="/">Users</a></p>
            <p class="mt-6"><a href="/">Settings</a>
        </div>
        </div>-->

        <!--<div class="flex items-center px-6 py-4 mb-4 bg-[#ffffff2a] rounded-2xl w-max mx-auto">
            <img src="/asset/book.png" alt="">
            <div class="ml-3">
                 <p class="font-normal">User Guide</p>
               <p class="font-light text-sm">Documentation</p>
            </div>
        </div>

      </div>-->
      <!-- end sidebar mobile & tablet -->
</template>

<script>
export default {
    computed: {
        sidebarmobile(){
            return this.$store.state.sidebarmobile
        }
    },
    methods: {
        tutupside(){
            this.$store.state.sidebarmobile = false
        }
    },
}
</script>

<style>
.allll{
    width: 270px;
    height: 750px;
    background-color:
    #b36bc6;
    padding-left: 30px;  
    flex:none; 

}

</style>

