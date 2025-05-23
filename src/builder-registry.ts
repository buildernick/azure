"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Nav,
  NavCategoryItem,
  NavDivider,
  NavItem,
} from "@fluentui/react-nav-preview";
import { CardWide } from "./components/CardWide";
import Tile from "./components/Tile";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(NavDivider), {
  name: "NavDivider",
  inputs: [
    {
      name: "alignContent",
      type: "string",
      enum: ["center", "end", "start"],
    },
    {
      name: "appearance",
      type: "string",
      enum: ["brand", "default", "strong", "subtle"],
    },
    {
      name: "as",
      type: "string",
      meta: {
        ts: "Type",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "inset",
      type: "boolean",
    },
    {
      name: "vertical",
      type: "boolean",
    },
    {
      name: "wrapper",
      type: "string",
      meta: {
        ts: 'NonNullable<WithSlotShorthandValue<{ as?: "div"; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ...; } & { ...; }>>',
      },
      required: false,
    },
  ],
});

Builder.registerComponent(withChildren(NavCategoryItem), {
  name: "NavCategoryItem",
  inputs: [
    {
      name: "as",
      type: "string",
      meta: {
        ts: "Type",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "expandIcon",
      type: "string",
      meta: {
        ts: 'NonNullable<WithSlotShorthandValue<{ as?: "span"; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & { ...; } & { ...; }>>',
      },
      required: false,
    },
    {
      name: "icon",
      type: "string",
      meta: {
        ts: 'WithSlotShorthandValue<{ as?: "span"; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & { ...; } & { ...; }>',
      },
    },
  ],
});

Builder.registerComponent(withChildren(Nav), {
  name: "Nav",
  inputs: [
    {
      name: "as",
      type: "string",
      meta: {
        ts: "Type",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "defaultOpenCategories",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "string[]",
      },
    },
    {
      name: "defaultSelectedCategoryValue",
      type: "string",
    },
    {
      name: "defaultSelectedValue",
      type: "string",
    },
    {
      name: "density",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "multiple",
      type: "boolean",
    },
    {
      name: "openCategories",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "string[]",
      },
    },
    {
      name: "selectedCategoryValue",
      type: "string",
    },
    {
      name: "selectedValue",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(NavItem), {
  name: "NavItem",
  inputs: [
    {
      name: "as",
      type: "string",
      meta: {
        ts: "Type",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "disabledFocusable",
      type: "boolean",
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
      meta: {
        ts: 'WithSlotShorthandValue<{ as?: "span"; } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & { ...; } & { ...; }>',
      },
    },
    {
      name: "value",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Tile, {
  name: "Tile",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "imageAlt",
      type: "string",
    },
    {
      name: "imageUrl",
      type: "string",
      required: true,
    },
    {
      name: "showInfo",
      type: "boolean",
    },
    {
      name: "showMenu",
      type: "boolean",
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(CardWide, {
  name: "CardWide",
  inputs: [
    {
      name: "bodyText",
      type: "string",
      required: true,
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "imageAlt",
      type: "string",
    },
    {
      name: "imagePosition",
      type: "string",
      enum: ["left", "right"],
    },
    {
      name: "imageUrl",
      type: "string",
      required: true,
    },
    {
      name: "showBarIcon",
      type: "boolean",
    },
    {
      name: "showButton",
      type: "boolean",
    },
    {
      name: "titleText",
      type: "string",
      required: true,
    },
    {
      name: "variant",
      type: "string",
      enum: ["info", "success", "warning"],
    },
  ],
});
