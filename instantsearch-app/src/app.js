const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'MO0YIG16HD',
  'a90eb4d4963498731f6375c37d699335'
);

const search = instantsearch({
  indexName: 'nba-players-new',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <div>
            <h1>${components.Highlight({ hit, attribute: 'name' })}</h1>
            <p>${components.Highlight({ hit, attribute: 'team' })}</p>
            <p>${components.Highlight({ hit, attribute: 'college' })}</p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
