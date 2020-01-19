<template>
  <div class="home">
    <h1>Wine Store</h1>
    <div id="welcomeMessage">
      Our selection contains {{ winesCount }} wines from across many different regions.
    </div>
    <div id="colourSelect">
      <h5>Shop by Colour</h5>
      <div id="colourList" class="row">
        <div class="colourOption selectionOption col-4">
          <img src="/images/redWine.png" alt="Red Wine" height="150"/>
          <div class="colourCaption">Red</div>
        </div>
        <div class="colourOption selectionOption col-4">
          <img src="/images/whiteWine.png" alt="White Wine" height="150"/>
          <div class="colourCaption">White</div>
        </div>
        <div class="colourOption selectionOption col-4">
          <img src="/images/roseWine.png" alt="Rose Wine" height="150"/>
          <div class="colourCaption">Rose</div>
        </div>
      </div>
    </div>
    <div id="regionSelect">
      <h5>Shop by Region</h5>
      <div id="regionList" class="row">
        <div v-for="item in regions" v-bind:key="item.name" class="selectionOption col-3">
          <div class="regionImageWrapper">
            <img :src="item.image" alt="item.Name" width="200"/>
          </div>
          <div class="regionCaption">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div id="allSelect">
      <p>If you just want to browse then you can use the link below to see our full collection:</p>
      <p><router-link to="/fullrange">See the full collection</router-link></p>
    </div>
    <button class="btn btn-primary" @click="toggleWineForm" style="display: none">Add new Wine</button>
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
import { mapActions, mapGetters, mapState } from 'vuex'
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
  computed: {
    ...mapGetters([
      'winesCount',
      'getAllReds'
    ]),
    ...mapState([
      'regions'
    ])
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
      this.formData = {
        name: '',
        colour: '',
        region: 'test',
        price: '0.00',
        year: 'test'
      }
    }
  }
}
</script>
