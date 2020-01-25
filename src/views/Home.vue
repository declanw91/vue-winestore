<template>
  <div class="home">
    <div id="welcomeMessage" class="mb-3 p-1">
      <h1>Welcome to Shalom Wines</h1>
      <p>Our selection contains {{ winesCount }} wines from across many different regions.</p>
      <p>Use the options below to browse by colour, region or if you want to see our full range use the link at the bottom to see our full set of options</p>
    </div>
    <div id="colourSelect" class="mb-3 p-1">
      <h5 class="mb-4">Shop by Colour</h5>
      <div id="colourList" class="row">
        <div class="colourOption selectionOption col-4">
          <router-link to="/red">
            <img src="/images/redWine.png" alt="Red Wine" height="150"/>
            <div class="colourCaption">Red</div>
          </router-link>
        </div>
        <div class="colourOption selectionOption col-4">
          <router-link to="/white">
            <img src="/images/whiteWine.png" alt="White Wine" height="150"/>
            <div class="colourCaption">White</div>
          </router-link>
        </div>
        <div class="colourOption selectionOption col-4">
          <router-link to="/rose">
            <img src="/images/roseWine.png" alt="Rose Wine" height="150"/>
            <div class="colourCaption">Rose</div>
          </router-link>
        </div>
      </div>
    </div>
    <div id="regionSelect" class="mb-3 p-1">
      <h5 class="mb-4">Shop by Region</h5>
      <div id="regionList" class="row">
        <div v-for="item in regions" v-bind:key="item.name" class="selectionOption col-3">
          <div class="regionImageWrapper">
            <router-link :to="'/wines/'+item.name">
              <img :src="item.image" :alt="item.name" width="200"/>
            </router-link>
          </div>
          <div class="regionCaption">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div id="allSelect" class="mb-3 p-1">
      <p>If you just want to browse then you can use the link below to see our full collection:</p>
      <p><router-link to="/fullrange">See the full collection</router-link></p>
    </div>
    <b-form @submit.prevent="handleSubmit" v-if="showWineForm">
      <b-form-group id="input-group-2" label="Wine Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.Name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Wine Colour:" label-for="input-3">
        <b-form-select
          id="input-4"
          v-model="formData.Colour"
          required
        >
          <b-form-select-option v-for="item in colours" :value="item.name" v-bind:key="item.name">{{ item.name }}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Region:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="formData.Region"
          required
        >
          <b-form-select-option v-for="item in regions" :value="item.name" v-bind:key="item.name">{{ item.name }}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Year:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formData.Year"
          required
          placeholder="Enter year"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Price:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="formData.Price"
          required
          placeholder="Enter price"
          type="number"
          step="0.01"
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
        Name: '',
        Colour: '',
        Region: 'test',
        Price: '0.00',
        Year: 'test'
      }
    }
  },
  computed: {
    ...mapGetters([
      'winesCount',
      'getAllReds'
    ]),
    ...mapState([
      'regions',
      'colours'
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
      const { Name, Colour } = this.formData
      const payload = { Colour,
        wine: {
          Name,
          Colour
        }
      }
      console.log(payload)
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

<style scoped>
  #colourSelect, #regionSelect, #allSelect, #welcomeMessage {
    border: 1px solid #000000;
    background: #FFFFFF;
  }
</style>
