<template>
  <div class="products">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-10 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
      <div class="md-layout-item md-size-25 md-medium-size-25 md-small-size-25 md-xsmall-hide">
        <h2 class="title">Search Product</h2>
        <md-card class="search-card">
          <md-card-header>
            <md-field>
              <md-icon>search</md-icon>
              <label>Search</label>
              <md-input v-model="type"></md-input>
            </md-field>
          </md-card-header>
        </md-card>
        <h2 class="title">Categories</h2>
        <md-card class="category-card">
          <md-card-content>
            <md-list class="category-content scrollable">
              <md-list-item>
                <md-button class="md-list-item-text">Shoes</md-button>
              </md-list-item>
              <md-list-item>
                <md-button class="md-list-item-text">Bag</md-button>
              </md-list-item>
              <md-list-item>
                <md-button class="md-list-item-text">Shirt</md-button>
              </md-list-item>
              <md-list-item>
                <md-button class="md-list-item-text">Watch</md-button>
              </md-list-item>
              <md-list-item>
                <md-button class="md-list-item-text">Watch</md-button>
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item main-content">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <h2 class="text-left">All Products <span class="badge badge-success">4</span></h2>
          </div>
          <div class="md-layout-item">
            <div class="text-right">
              <md-button @click="goToAdd" class="md-raised">Add</md-button>
            </div>
          </div>
        </div>
        <div class="products-content scrollable">
          <md-card md-with-hover>
            <md-ripple>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-25">
                  <md-card-media>
                    <img src="https://c.static-nike.com/a/images/t_prod_ss/w_640,c_limit,q_auto,f_auto/a2xc2snk9pr1tnwl8j53/womens-air-jordan-i-twist-release-date.jpg" alt="Product">
                  </md-card-media>
                </div>
                <div class="md-layout-item">
                  <md-card-header>
                    <div class="md-title">
                      <p class="text-left">Nike Air Jordan</p>
                    </div>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-size-40">
                        <div class="price text-left">
                          <md-icon>local_atm</md-icon>
                          <span> Rp.2.000.000,-</span>
                        </div>
                        <div class="stock text-left">
                          <md-icon>local_offer</md-icon>
                          <span> 20 item(s)</span>
                        </div>
                      </div>
                      <div class="md-layout-item">
                        <div class="text-left">
                          <p>Categories</p>
                          <md-chip>Shoes</md-chip>
                          <md-chip>Nike</md-chip>
                          <md-chip>Hypebeast</md-chip>
                        </div>
                      </div>
                    </div>
                  </md-card-content>
                </div>
              </div>
            </md-ripple>
          </md-card>
          <md-card md-with-hover>
            <md-ripple>
              <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-size-25">
                  <md-card-media>
                    <img src="https://stockx-360.imgix.net//adidas-Yeezy-Boost-350-V2-Black/Images/adidas-Yeezy-Boost-350-V2-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1603481985">
                  </md-card-media>
                </div>
                <div class="md-layout-item">
                  <md-card-header>
                    <div class="md-title">
                      <p class="text-left">Adidas Yeezy Boost</p>
                    </div>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item md-size-40">
                        <div class="price text-left">
                          <md-icon>local_atm</md-icon>
                          <span> Rp.5.000.000,-</span>
                        </div>
                        <div class="stock text-left">
                          <md-icon>local_offer</md-icon>
                          <span> 10 item(s)</span>
                        </div>
                      </div>
                      <div class="md-layout-item">
                        <div class="text-left">
                          <p>Categories</p>
                          <md-chip>Shoes</md-chip>
                          <md-chip>Adidas</md-chip>
                          <md-chip>Hypebeast</md-chip>
                        </div>
                      </div>
                    </div>
                  </md-card-content>
                </div>
              </div>
            </md-ripple>
          </md-card>
          <md-card md-with-hover>
            <md-ripple>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-25">
                  <md-card-media>
                    <img src="https://c.static-nike.com/a/images/t_prod_ss/w_640,c_limit,q_auto,f_auto/a2xc2snk9pr1tnwl8j53/womens-air-jordan-i-twist-release-date.jpg" alt="Product">
                  </md-card-media>
                </div>
                <div class="md-layout-item">
                  <md-card-header>
                    <div class="md-title">
                      <p class="text-left">Nike Air Jordan</p>
                    </div>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-size-40">
                        <div class="price text-left">
                          <md-icon>local_atm</md-icon>
                          <span> Rp.2.000.000,-</span>
                        </div>
                        <div class="stock text-left">
                          <md-icon>local_offer</md-icon>
                          <span> 20 item(s)</span>
                        </div>
                      </div>
                      <div class="md-layout-item">
                        <div class="text-left">
                          <p>Categories</p>
                          <md-chip>Shoes</md-chip>
                          <md-chip>Nike</md-chip>
                          <md-chip>Hypebeast</md-chip>
                        </div>
                      </div>
                    </div>
                  </md-card-content>
                </div>
              </div>
            </md-ripple>
          </md-card>
          <md-card md-with-hover>
            <md-ripple>
              <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-size-25">
                  <md-card-media>
                    <img src="https://stockx-360.imgix.net//adidas-Yeezy-Boost-350-V2-Black/Images/adidas-Yeezy-Boost-350-V2-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1603481985">
                  </md-card-media>
                </div>
                <div class="md-layout-item">
                  <md-card-header>
                    <div class="md-title">
                      <p class="text-left">Adidas Yeezy Boost</p>
                    </div>
                  </md-card-header>
                  <md-card-content>
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item md-size-40">
                        <div class="price text-left">
                          <md-icon>local_atm</md-icon>
                          <span> Rp.5.000.000,-</span>
                        </div>
                        <div class="stock text-left">
                          <md-icon>local_offer</md-icon>
                          <span> 10 item(s)</span>
                        </div>
                      </div>
                      <div class="md-layout-item">
                        <div class="text-left">
                          <p>Categories</p>
                          <md-chip>Shoes</md-chip>
                          <md-chip>Adidas</md-chip>
                          <md-chip>Hypebeast</md-chip>
                        </div>
                      </div>
                    </div>
                  </md-card-content>
                </div>
              </div>
            </md-ripple>
          </md-card>
        </div>
      </div>
      <div class="md-layout-item md-size-10 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToAdd () {
      this.$router.push('products/add')
    }
  }
}
</script>

<style>
  .products-content {
    margin-top: 16px;
    max-height: 80vh;
    overflow: auto;
  }

  .stock {
    margin-top: 16px;
  }

  .search-card {
    margin-top: 16px;
    border-radius: 15px;
    margin-bottom: 16px;
  }

  .category-card {
    margin-top: 16px;
    border-radius: 15px;
  }

  .category-content {
    padding-top: 0;
    padding-bottom: 0;
    max-height: 30vh;
    overflow: auto;
  }
</style>
