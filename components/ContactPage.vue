<template>
  <section class="conatct-area pb-115">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="conatct-info">
            <h3 class="title">
              GET IN TOUCH!
            </h3>
            <p>
              There are many variations of passages of lorem ipsum is simply
              free text available, but the majority have alteration in some
              form.
            </p>
          </div>
          <div class="conatct-info-item">
            <div class="item">
              <i class="flaticon-email"></i>
              <span>Email</span>
              <p>needhelp@lteconsulting.co.za</p>
            </div>
            <div class="item center">
              <i class="flaticon-calling"></i>
              <span>Phone</span>
              <p>(011) 061 5700</p>
            </div>
            <div class="item">
              <i class="flaticon-address"></i>
              <span>Visit</span>
              <p>5 Eglin Rd, Sunninghill, Sandton, 2157</p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="comment-form">
            <form
              action="#"
              method="POST"
              class="contact-one__form"
              id="contact-form"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-box">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-lg-6">
                  <div class="input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-lg-6">
                  <div class="input-box">
                    <input
                      type="text"
                      placeholder="Phone number"
                      name="number"
                    />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-lg-6">
                  <div class="input-box">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-lg-12">
                  <div class="input-box">
                    <textarea
                      placeholder="Write Message"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <!-- /.col-lg-12 -->
                <div class="col-lg-12 text-left">
                  <div class="input-box">
                    <button type="submit" class="main-btn">
                      Submit
                    </button>
                  </div>
                  <!-- /.thm-btn contact-one__btn -->
                </div>
                <!-- /.col-lg-12 -->
              </div>
              <!-- /.row -->
            </form>
            <!-- /.contact-one__form -->
            <p class="form-message"></p>
          </div>
          <!-- /.comment-form -->
        </div>
      </div>
      <div class="row"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage"
};
</script>

<style scoped></style>
