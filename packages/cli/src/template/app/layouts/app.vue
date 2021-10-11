<template>
  <App>
    <Layout>
      <Nav slot="nav">
        <img slot="left"
          class="h-8 w-8 rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQGWmKb5bGho8Q/company-logo_200_200/0/1630482349668?e=1639612800&v=beta&t=c_tMpCx47EqWxWb8wQEmNDS0uvqaeZ0nYd3Ks-P8sEo"
          alt=""/>
        <!-- <Settings slot="right">
          <div class="w-full" slot="button">=</div>
          <div class="">
          </div>
        </Settings> -->
      </Nav>

      <!-- <Menu slot="menu">
      <PageLink page="Home" icon="home"/>
    </Menu> -->

      <Main slot="main" class="md:mr-4">
        <Nuxt/>
      </Main>

    </Layout>
  </App>
</template>

<script>
export default {
}
</script>
