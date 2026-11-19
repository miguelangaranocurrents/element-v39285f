/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// @vitest-environment happy-dom

import { describe, it, expect } from "vitest";

import { setUpCommandTest } from "./__mocks__";

describe("/spoiler", () => {
    const roomId = "!room:example.com";

    it("renders markdown inside the spoiler", async () => {
        const { client, command, args } = setUpCommandTest(roomId, "/spoiler the **secret** plan");
        const { content } = await command.run(client, roomId, null, args).promise;
        expect(content.formatted_body).toContain("<span data-mx-spoiler>");
        expect(content.formatted_body).toContain("<strong>secret</strong>");
    });
});
