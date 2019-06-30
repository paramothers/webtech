

import {groupBy} from 'lodash-es';
import people from './people';

const managerGroups = groupBy(people, "manager")

const root  = document.createElement("div");
root.innerHTML = `<p>Hellow Webpack</p>`

const root2  = document.createElement("div");
root2.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</rep>`

document.body.appendChild(root);
document.body.appendChild(root2);