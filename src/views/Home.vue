<template>
  <div class="home">
    <h1>Wine Store</h1>
    <button class="btn btn-primary" @click="toggleWineForm">Add new Wine</button>
    <b-form @submit.prevent="handleSubmit" v-if="showWineForm">
      <b-form-group id="input-group-2" label="Wine Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Wine Colour:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.colour"
          required
          placeholder="Enter colour"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showWineForm: false,
      formData: {
        name: '',
        colour: '',
        region: 'test',
        price: '0.00',
        year: 'test'
      }
    }
  },
  methods: {
    ...mapActions([
      'addWine'
    ]),
    toggleWineForm: function () {
      this.showWineForm = !this.showWineForm
    },
    handleSubmit: function () {
      // implement submit
      const { name, colour } = this.formData
      const payload = { colour,
        wine: {
          name,
          colour
        }
      }
      this.addWine(payload)
    }
  }
}
</script>
