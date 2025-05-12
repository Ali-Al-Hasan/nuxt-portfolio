import { v as vueExports, u as useRouter, a as useNuxtApp, r as resolveRouteObject, b as useRuntimeConfig, n as navigateTo, c as nuxtLinkDefaults, _ as _export_sfc, s as serverRenderer_cjs_prodExports } from "../server.mjs";
import { parseQuery, hasProtocol, joinURL, withTrailingSlash, withoutTrailingSlash } from "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs";
import "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "C:/Users/Ali/Desktop/Portfolio/frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = useRuntimeConfig();
    const hasTarget = vueExports.computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = vueExports.computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = vueExports.resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = vueExports.computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = vueExports.computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = vueExports.computed(() => {
      var _a;
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? vueExports.computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? vueExports.computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? vueExports.computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return vueExports.defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      vueExports.ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return vueExports.h(
            vueExports.resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return vueExports.h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _imports_0 = "" + __buildAssetsURL("logo.BE8914af.svg");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = vueExports.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "site-header" }, _attrs))} data-v-bb44ed3c><div class="container" data-v-bb44ed3c><div class="logo" data-v-bb44ed3c>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} alt="logo" width="80" loading="lazy" data-v-bb44ed3c${_scopeId}>`);
          } else {
            return [
              vueExports.createVNode("img", {
                src: _imports_0,
                alt: "logo",
                width: "80",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ open: isOpen.value }, "side-menu"])}" data-v-bb44ed3c><ul data-v-bb44ed3c></ul></nav></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bb44ed3c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "site-footer" }, _attrs))} data-v-26b6edea><div class="container" data-v-26b6edea><p data-v-26b6edea>© ${serverRenderer_cjs_prodExports.ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Ali.dev – Alle rechten voorbehouden</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-26b6edea"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "layout" }, _attrs))} data-v-567485c6>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(Header, null, null, _parent));
      _push(`<main data-v-567485c6>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-567485c6"]]);
export {
  _default as default
};
//# sourceMappingURL=default-DyCXA1z3.js.map
