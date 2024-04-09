import { View } from "./_View";
import { meta } from "./_meta";
import { links } from "./_links";

import { actionController, loaderController } from "./_controllers";

export const NewItemClient = { View, meta, links };
export const NewItemServer = { loaderController, actionController };
