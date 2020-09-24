import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

// client
//   .query({
//     query: gql`
//       query {
//         getCollectionsByTitle(title: "hats") {
//           id
//           title
//           items {
//             name
//             price
//           }
//         }
//       }
//     `,
//   })
//   .then((res) => console.log(res));

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default CollectionsOverview;
