<template>
  <div v-theme="'narrow'" id="show-blogs">
    <h1>All Blogs Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs">
    <article v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toCapitalize }}</h2>
        <p>{{ blog.content | snippet | toCapitalize}}</p>
      </router-link>
    </article>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin"
export default {
  data() {
    return {
      blogs: [],
      search: '',
    };
  },
  components: {},
  computed: {
    
  },
  methods: {},
  created() {
    this.$http.get("https://blog-list-1b3fe-default-rtdb.europe-west1.firebasedatabase.app/posts.json").then((res) => {
      return res.json();
    }).then((data) => {
      let blogsArra = [];
      for (let key in data) {
        data[key].id = key;
        blogsArra.push(data[key]);
      }
      this.blogs = blogsArra
      console.log(this.blogs)
      
    })
  },
  filters: {
    toCapitalize(value){
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    'rainbow': {
      bind(el) {
        const colors = ["FF0000", "FF7F00", "FFFF00", "00FF00", "00BFFF", "0000FF"];
        el.style.color = "#" + colors[Math.floor(Math.random() * colors.length)];
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

#show-blogs input {
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 20px;
  border-radius: 0;
  border: 1px solid #eaeaea;
}

.single-blog {
  width: 100%;
  padding: 24px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.single-blog a {
  color: initial;
  text-decoration: none;
}

.single-blog:not(:last-child) {
  margin-bottom: 16px;
}

.single-blog h2 {
  margin: 0 0 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f1f1;
}

.single-blog p {
  margin: 0;
}
</style>
