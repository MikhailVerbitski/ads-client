<template>
  <nav class="navbar navbar-expand-lg navbar-light site-panel-color">
    <a class="navbar-brand" href="/"> Super site</a><button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active"><a class="nav-link" href="/posts/new">Create new Post!<span class="sr-only" current=""></span></a></li>
          <li class="nav-item"><label class="switch" id="switch"><input id="slider" onchange="toggleTheme()" type="checkbox"><span class="slider round"></span></label></li>
        </ul>
        <div class="nav-item dropdown">
          <ul class="navbar-nav mr-auto">
              <a class="nav-item nav-link dropdown-toggle user-action" data-toggle="dropdown" href="#"><img alt="Avatar" class="avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></a>
              <div class="dropdown-menu dropdown-menu-right">
                <li class="dropdown-item"><a class="navbar-link" href="/users/sign_in">Sign in</a></li>
                <li class="dropdown-item"><a class="navbar-link" href="/users/sign_up">Registration</a></li>
              </div>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
  }
</script>

<style>
</style>