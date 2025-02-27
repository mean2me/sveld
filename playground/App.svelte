<script>
  import "carbon-components-svelte/css/all.css";
  import Header from "./Header.svelte";
  import {
    FormLabel,
    Dropdown,
    Grid,
    Row,
    Column,
    Tabs,
    Tab,
    TabContent,
    InlineLoading,
  } from "carbon-components-svelte";
  import { onMount } from "svelte";
  import ComponentParser from "../src/ComponentParser";
  import Input from "./CodeEditor.svelte";
  import data from "./data";
  import TabContentOverlay from "./TabContentOverlay.svelte";

  const parser = new ComponentParser();

  let size;
  let selectedId = data[0].moduleName;
  let tabTypeScript;
  let tabJson;
  let tabMarkdown;

  onMount(() => {
    import("./TabTypeScript.svelte").then((importee) => {
      tabTypeScript = importee.default;
    });

    import("./TabJson.svelte").then((importee) => {
      tabJson = importee.default;
    });

    import("./TabMarkdown.svelte").then((importee) => {
      tabMarkdown = importee.default;
    });
  });

  $: selected = data.find((datum) => datum.moduleName === selectedId);
  $: value = selected.code;

  // TODO: use module name from selected
  $: moduleName = "Component";

  let parsed_component = {};
  let parse_error = null;
  let codemirror;

  $: {
    try {
      parse_error = null;
      parsed_component = parser.parseSvelteComponent(value, {
        moduleName,
        filePath: "VIRTUAL",
      });
    } catch (error) {
      parse_error = error;
    }
  }
</script>

<Header>
  <Grid noGutter padding>
    <Row>
      <Column xlg={7} lg={6} sm={8}>
        <Dropdown
          size="xl"
          titleText="Svelte code"
          bind:selectedId
          items={data.map((datum) => ({
            id: datum.moduleName,
            text: datum.moduleName,
          }))}
          on:select={() => {
            codemirror.setValue(value);
          }}
        />
        <Input bind:code={value} bind:codemirror />
      </Column>
      <Column xlg={9} lg={10} sm={8}>
        <FormLabel id="output">Sveld output</FormLabel>
        <Tabs type="container" id="output">
          <Tab label="TypeScript" />
          <Tab label="JSON" />
          <Tab label="Markdown" />
          <div slot="content">
            {#if parse_error}
              <TabContentOverlay title="Parse error">
                {parse_error}
              </TabContentOverlay>
            {/if}
            <TabContent>
              {#if tabTypeScript}
                <svelte:component this={tabTypeScript} {parsed_component} {moduleName} />
              {:else}
                <InlineLoading style="margin: var(--cds-spacing-05)" />
              {/if}
            </TabContent>
            <TabContent>
              {#if tabJson}
                <svelte:component this={tabJson} {parsed_component} {moduleName} />
              {:else}
                <InlineLoading style="margin: var(--cds-spacing-05)" />
              {/if}
            </TabContent>
            <TabContent>
              {#if tabMarkdown}
                <svelte:component this={tabMarkdown} {parsed_component} {moduleName} />
              {:else}
                <InlineLoading style="margin: var(--cds-spacing-05)" />
              {/if}
            </TabContent>
          </div>
        </Tabs>
      </Column>
    </Row>
  </Grid>
</Header>

<style>
  :global(.bx--inline-loading) {
    justify-content: center;
  }

  :global(.bx--tab-content) {
    padding: 0;
  }

  :global(.bx--tab-content[aria-hidden="false"]) {
    display: flex;
    height: calc(100vh - 13rem);
    overflow-y: auto;
  }

  @media (max-width: 1056px) {
    :global(.bx--tab-content[aria-hidden="false"]) {
      height: auto;
    }
  }

  :global(pre) {
    display: flex;
    flex: 1;
    overflow-y: auto;
  }

  :global(textarea.bx--text-area) {
    height: calc(100vh - 3rem - 11rem);
  }

  :global(pre code) {
    flex: 1;
  }
</style>
