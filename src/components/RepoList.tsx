// import React from 'react';
// import { Repo } from '../types';

// interface Props {
//   repos: Repo[];
//   onSelect: (repo: Repo) => void;
// }

// const RepoList: React.FC<Props> = ({ repos, onSelect }) =>
//   repos.length === 0
//     ? <p>No repos found.</p>
//     : (
//       <ul>
//         {repos.map(r => (
//           <li
//           key={r.id}
//           className="border-b py-2 cursor-pointer hover:bg-gray-100"
//           onClick={() => onSelect(r)}
//         >
//           <div>
//             <span className="font-semibold">Name:</span> {r.name}
//           </div>
//           <div>
//             <span className="font-semibold">Description:</span>{' '}
//             {r.description ?? 'No description.'}
//           </div>
//           <div>
//             <span className="font-semibold">Stars:</span> {r.stars}
//           </div>
//         </li>
//         ))}
//       </ul>
//     );

// export default RepoList;


import React from 'react';
import { Repo } from '../types';

interface Props {
  repos: Repo[];
  onSelect: (repo: Repo) => void;
}

const RepoList: React.FC<Props> = ({ repos, onSelect }) => {
  if (repos.length === 0) {
    return <p className="text-gray-600">No repositories found.</p>;
  }

  return (
    <>
      <p className="mb-2 text-gray-700">
        Click on a row to see more details.
      </p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 font-semibold">Name</th>
            <th className="text-left p-2 font-semibold">Description</th>
            <th className="text-left p-2 font-semibold">Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map(r => (
            <tr
              key={r.id}
              onClick={() => onSelect(r)}
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.description ?? '—'}</td>
              <td className="p-2">⭐ {r.stars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RepoList;

