<script>
    import Navbar from "../components/navbar.svelte";
</script>

<svelte:head>
    <title>Martin Winkler</title>
</svelte:head>

<div class="container p-5">
    <div class="row">
        <div class="col-4">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                    </div>
                    <div class="col-md-auto">
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <main>
            <slot></slot>
            </main>
        </div>
    </div>
</div>


