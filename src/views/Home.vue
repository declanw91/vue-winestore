<template>
  <div class="home">
    <div id="welcomeMessage" class="mb-3 p-1">
      <p>Our selection contains {{ winesCount }} wines from across many different regions.</p>
      <p>Use the options below to browse by colour, region or if you want to see our full range use the link at the bottom to see our full set of options</p>
    </div>
    <div id="colourSelect" class="mb-3 p-1">
      <h5>Shop by Colour</h5>
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
      <h5>Shop by Region</h5>
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
