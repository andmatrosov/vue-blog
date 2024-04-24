<template>
  <div id="add-blog">
    <h2>Добавить новую запись</h2>
    <form action="">
      <label for="title">Заголовок</label>
      <input type="text" id="title" v-model.lazy="blog.title" />
      <label for="content">Содержание</label>
      <textarea id="content" v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <input type="checkbox" id="development" value="Разработка" v-model="blog.categories">
        <label for="#development">Разработка</label>
        <input type="checkbox" id="jobsearch" value="Поиск работы" v-model="blog.categories">
        <label for="#jobsearch">Поиск работы</label>
        <input type="checkbox" id="lifestyle" value="Блог" v-model="blog.categories">
        <label for="#lifestyle">Лайф стайл</label>
      </div>
      <label for="author">Автор</label>
      <select name="author" id="author" v-model="blog.author">
        <option selected disabled>Выберите автора</option>
        <option v-for="author in authors" :key="author" :value="author">{{author}}</option>
      </select>
    </form>
    <div id="preview">
      <h3>Новая запись</h3>
      <p>Заголовок: {{ blog.title }}</p>
      <p>Содержание:</p>
      <p>{{ blog.content }}</p>
      <p>Категории:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
      <p>Автор: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ''
      },
      authors: [
          'Vue Developer',
          'React Developer',
          'HTML Developer'
      ]
    };
  },
  components: {},
  methods: {},
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 8px;
}

#checkboxes label{
  display: inline-block;
  margin-right: 16px;
}
</style>
