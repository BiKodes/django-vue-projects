<template>
    <div id="blog">
        <div
            v-for="post in posts" 
            :key="post.id"
        >
            <h2>
                {{ post.title }}
            </h2>
        </div> 

        <div v-if="showPrevButton">
            <button @click.prevent="loadPrev()">Prev</button>
        </div>

        <div v-if="showNextButton">
            <button @click.prevent="loadNext()">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    
    data() {
        return {
          posts: [],
          currentPage: 1,
          showNextButton: false,
          showPrevButton: false
        }
    },
    
    mounted() {
        this.getPosts()
    },

    methods: {
        loadNext() {
            this.currentPage += 1
            this.getPosts();
        },

        loadPrev() {
            this.currentPage -= 1
            this.getPosts();
        },

        getPosts() {
            fetch(`http://localhost:8000/posts/?page=${this.currentPage}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)

                    this.showNextButton = false
                    this.showPrevButton = false

                    if (data.next) {
                        this.showNextButton = true
                    } 
                    
                    if(data.previous) {
                        this.showPrevButton = true
                    }

                    this.posts = data.results
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>