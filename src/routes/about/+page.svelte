<script>
    import { outTransitionParams, inTransitionParams } from '$lib/transitioning';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition'
    import Heading from '../../components/heading.svelte';
    import SubHeading from '../../components/subHeading.svelte';

    /**
     * @typedef {object} AboutInfo
     * @property {string} timeframe
     * @property {string} info
    */

    /** 
    * @typedef {object} About
    * @property {AboutInfo[]} about.education
    * @property {AboutInfo[]} about.residencies
    * @property {AboutInfo[]} about.publications
    * @property {Object} about.exhibitions
    * @property {AboutInfo[]} about.exhibitions.solo
    * @property {AboutInfo[]} about.exhibitions.group
    */

    /**
     * @type {About}
     */
    let about;

    onMount(async () => {
        const res = await fetch('/data/about.json');
        about = await res.json();
    })

</script>

<section class="container pb-4" in:fly={inTransitionParams} out:fly={outTransitionParams}>
    <h1 class="display-5 text-center m-4">About</h1>
    <img class="rounded d-block mx-auto w-50" src="/contact_photo.png" alt="Martin Winkler" />
    <p class="text-center pt-3">Martin Winkler – born in Halle &#040;Saale&#041;, Germany – lives and works in Göttingen and Berlin</p>
    <hr />
    <div class="container">
        <Heading>Education</Heading>
        <div class="spacing">
            {#if about}
            {#each about.education as education}
                <p>{education.timeframe} {education.info}</p>
            {/each}
            <Heading>Residencies / Prizes</Heading>
            {#each about.residencies as residency}
                <p>{residency.timeframe} {residency.info}</p>
            {/each}
            <Heading>Publications</Heading>
            {#each about.publications as publication}
                <p>{publication.timeframe} {publication.info}</p>
            {/each}
            <Heading>Exhibitions</Heading>
            {#if about.exhibitions.solo.length > 0}
                <SubHeading>Solo Exhibitions</SubHeading>
                {#each about.exhibitions.solo as soloExhibition}
                    <p>{soloExhibition.timeframe} {soloExhibition.info}</p>
                {/each}
            {/if}
            {#if about.exhibitions.group.length > 0}
                <SubHeading>Group Exhibitions</SubHeading>
                {#each about.exhibitions.group as groupExhibition}
                    <p>{groupExhibition.timeframe} {groupExhibition.info}</p>
                {/each}
            {/if}
        {/if}
        </div>
    </div>
</section>

<style>
    img {
        object-fit: contain;
    }

    .spacing p {
        margin-bottom: .2rem;
    }

    .spacing > :global(h2), :global(h3) {
        margin-top: 1rem; 
        margin-bottom: 1rem;
    }

    :global(body) {
        font-family: "Open Sans", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
</style>