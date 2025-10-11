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
    <p class="text-left pt-3"><b>Martin Winkler &#040;b. 1992, Halle/Saale, Germany&#041;</b> is a visual artist based in Göttingen and Berlin. His work explores queerness, history, and pop culture through painting, illustration, and installation. Drawing from his background in journalism and extensive travels, he reexamines overlooked or forgotten narratives, transforming them with humor, bold symbolism, and vivid color. <br/><br/>Winkler often references historical imagery, queer archives, and the aesthetics of past childhoods and pop culture, translating them into simplified, dynamic forms that oscillate between abstraction and figuration. His compositions invite viewers to reflect on identity, trauma, and resilience, weaving together personal and collective histories.</p>
    <hr />
    <div class="container">
        <Heading>Education</Heading>
        <div class="spacing">
            {#if about}
                {#if about.exhibitions.solo.length > 0}
                    <Heading>Solo Exhibitions</Heading>
                    {#each about.exhibitions.solo as soloExhibition}
                        <p>{soloExhibition.timeframe} {soloExhibition.info}</p>
                    {/each}
                {/if}
            {#if about.exhibitions.group.length > 0}
                <Heading>Group Exhibitions</Heading>
                {#each about.exhibitions.group as groupExhibition}
                    <p>{groupExhibition.timeframe} {groupExhibition.info}</p>
                {/each}
            {/if}
            {#if about.education}
                <Heading>Education</Heading>
                {#each about.education as education}
                    <p>{education.timeframe} {education.info}</p>
                {/each}
            {/if}
            {#if about.residencies}
                <Heading>Residencies / Grants</Heading>
                {#each about.residencies as residency}
                    <p>{residency.timeframe} {residency.info}</p>
                {/each}
            {/if}
            
            <Heading>Publications</Heading>
            {#each about.publications as publication}
                <p>{publication.timeframe} {publication.info}</p>
            {/each}

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