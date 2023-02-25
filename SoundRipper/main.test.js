import {expect, test} from "vitest";

import { getYTVideoID } from "./getYTVideoID";

test("Extract the correct video-id from YT link", () =>{
    expect(getYTVideoID("https://www.youtube.com/watch?v=kx1btNYZBJo")).toBe("kx1btNYZBJo");

});