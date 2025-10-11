<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fly } from "svelte/transition";
    import Instagram from "../../components/instagram.svelte";

</script>

<section class="d-block" in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <div class="contactinfo">
        <h2 class=" display-5 text-center p-4">Martin Winkler</h2>
        <p class="text-center">
            Mail: <a href="mailto:martinwinkler@gmx.de">martwinkler@gmx.de</a>
        </p>
        <p class="text-center"><Instagram /> <a href="https://www.instagram.com/mart.winkler/">@mart.winkler</a></p>
    </div>
    <footer class="text-center mt-4" style="text-wrap: balance">
        © Martin Winkler, all rights reserved. <br/>
        The content on this website cannot be used or published without permission.
    </footer>
</section>

<style>
    a {
        text-decoration: none;
        transition: all .2s linear;
        -webkit-transition: all .2s linear;
    }

    section {
        height: 93.3vh;
        width: 100vw;
        padding: 0;
        position: relative;
    }

    a:hover {
        color: #393c3f
    }

    .contactinfo {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    footer {
        margin: 0;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2 {
        font-family: "Gochi Hand", cursive;
        font-weight: 400;
        font-style: normal;
    }
</style> 