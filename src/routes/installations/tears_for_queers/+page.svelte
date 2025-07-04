<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    /** 
    * @typedef {object} Installations
    * @property {string} installations.name
    * @property {string} installations.prefix
    * @property {string[]} installations.paths
    */

    /**
     * @type {string[]}
     */
    let paths = []

    onMount(async () => {
        const res = await fetch("/data/installations.json");
        
        /**@type {Installations[]}*/ 
        const installationsList = await res.json();
        const installations = installationsList.find(x => x.name === 'tears_for_queers');
        paths = installations?.paths.map(x => installations.prefix + x) ?? [];
    })

    let lightboxImageSource = '';
    let lightboxVisibility = ''

    const showLightbox = (/** @type {string} */ srcPath) => {
        const navelem = document.getElementById('topLevelNav');
        lightboxImageSource = srcPath;
        lightboxVisibility = 'active';
        document.body.style.overflow = 'hidden';
        if (navelem) {
            navelem.style.zIndex = '999';
        }
    }

    const hideLightbox = () => {
        lightboxImageSource = '';
        lightboxVisibility = '';
        document.body.style.overflow = '';
    }
</script>

<section in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1 class="display-5 text-center m-4">Tears for Queers</h1>
    <div class="lightbox {lightboxVisibility}" on:click={() => hideLightbox()} >
        <img src={lightboxImageSource}/>
    </div>
    <div class="container-fluid">
        {#each paths as imgPath}
            <img class="w-75 img-fluid mx-auto d-block m-2" src={imgPath} on:click={() => showLightbox(imgPath)} />
        {/each}
    </div>
    <footer class="text-center mb-2" style="text-wrap: balance">
        © Mario Strahl
    </footer>
</section>

<style>

.lightbox {
    display: none;
}

.lightbox.active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 1000;
    overflow: hidden;
    display: flex;
}

.lightbox.active img {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
}

</style>