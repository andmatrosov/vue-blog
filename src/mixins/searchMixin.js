export default {
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
