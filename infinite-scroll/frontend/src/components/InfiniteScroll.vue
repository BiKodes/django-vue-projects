<template>
    <div>
        <h1>Developers Posts.</h1>

        <div id="blog">
            <div
                v-for="post in posts"
                v-bind:key="post.id">
                <h1>
                    {{ post.title }}
                </h1>
                <p>
                    {{ post.body }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfiniteScroll',
    
    data() {
        return {
            posts:[],
            currentPage: 1,
            hasNext: true
        }
    },

    mounted(){
        this.getPosts();

        window.onscroll = () => {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

                if (bottomOfWindow && this.hasNext) {
                    this.currentPage += 1
                    this.getPosts()
                }
        }
    },

    methods: {
        getPosts() {
            console.log('Get Posts')

            fetch(`http://localhost:8000/get_posts/?page=${this.currentPage}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)

                    this.hasNext = false

                    if (data.next) {
                        this.hasNext = true
                    }

                    for (let i = 0; i < data.results.length; i++){
                        this.posts.push(data.results[i])
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>