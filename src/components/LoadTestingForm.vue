<template>
  <form @submit.prevent="handleRequest">
    <div class="form-group">
      <label for="rate">Кол-во запросов в секунду</label>
      <input v-model= "rateF" class="form-control">
    </div>
    <div class="form-group">
      <label for="durationSeconds">Длительность в секундах</label>
      <input v-model= "durationSecondsF" class="form-control">
    </div>
    <div class="form-group">
      <label for="url">Ссылка для нагрузки</label>
      <input v-model= "body.url" placeholder="https://example.com" class="form-control">
    </div>
    <div class="form-group">
      <label for="testBody">Введите тело теста</label>
    </div>

    <div class="form-group">
      <label for="testBody">Имя</label>
      <input v-model= "body.testBody.name"  class="form-control">
    </div>
    <div class="form-group">
      <label for="testBody">Фамилия</label>
      <input v-model= "body.testBody.surname" class="form-control">
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-block">
        <span>StartLoading</span>
      </button>
    </div>
  </form>
</template>

<script>
import loadTestService from "../service/LoadTestService"
export default {
  data() {
    return {
      rateF: 0,
      durationSecondsF: 0,
      body: {
        stepConfig: [],
        url: '',
        testBody: {
          name: '',
          surname: ''
        }
      }
    }
  },
  methods: {
    handleRequest(request) {
      this.body.stepConfig= [
        {rate: Number(this.rateF), durationSeconds: Number(this.durationSecondsF)}
      ]
      console.log(this.body)
      return loadTestService.startTest(this.body)
    }
  }
}

</script>