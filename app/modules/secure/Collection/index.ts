import { View } from "./_View";
import { meta } from "./_meta";

import { actionController, loaderController } from "./_controllers";

export const CollectionClient = { View, meta };
export const CollectionServer = { loaderController, actionController };
