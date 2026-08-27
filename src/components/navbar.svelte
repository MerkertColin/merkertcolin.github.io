<script>
    import Carousel from "./carousel.svelte";
    import { inTransitionParams, outTransitionParams } from '$lib/transitioning';
    import NavItem from "./navItem.svelte"
    import { fade } from "svelte/transition";

    let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav
    class="nav navbar flex-column d-md-flex align-items-stretch"
    id="topLevelNav"
>
  <div class="d-flex align-items-center align-items-center w-100 mb-3">
    <!-- Hamburger Button (Visible only on smaller viewports) -->
    <button 
      class="navbar-toggler border-0 shadow-none d-md-none" 
      type="button" 
      aria-expanded={isMenuOpen}
      aria-label="Toggle navigation"
      on:click={toggleMenu}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
    </button>
  </div>
  <div in:fade={inTransitionParams} out:fade={outTransitionParams} class="navbar-collapse flex-column align-items-stretch {isMenuOpen ? 'd-flex' : 'd-none d-md-flex'}">
    <NavItem href="/">MARTIN WINKLER</NavItem>
    <NavItem href="/news">News</NavItem>
    <NavItem href="/about">About</NavItem>
    <hr/>
    <NavItem href="/leaf_by_leaf">Leaf by Leaf</NavItem>
    <NavItem href="/decay">Decay</NavItem>
    <NavItem href="/tears_for_queers">Tears for Queers</NavItem>
    <NavItem href="/paintings">Paintings</NavItem>
  </div>
</nav>

<style>
    nav {
        padding: 1rem;
    }
</style>
