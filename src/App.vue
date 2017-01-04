<style scoped>
    @import './styles/common.css';
</style>
<template>
    <item></item>
</template>


<script>
    import Item from './views/item.vue'
    import store from './vuex/store' 
    module.exports = {
        ready: function() {
            const url = '/api/v1.0/feed/'
            fetch(url).then(response => {
                response.json().then(json => {
                   
                })
            })
        },
        components:{
            Item
        },
        store: store
    }
</script>
