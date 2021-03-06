### 0.18.1

- pref: faster template diagnostics

### 0.18.0

- feat: [Linked Editing](https://code.visualstudio.com/updates/v1_44#_synced-regions)
- fix: script not found error not working for `<script setup>`

### 0.17.7

- chore: rename extension in marketplace [#35](https://github.com/johnsoncodehk/volar/discussions/35)

### 0.17.6

- fix: ref sugar variable renaming no effect to template
- fix: `v-else-if` semantic token
- pref: split `<script>` and `<template>` to speed up current editing block diagnostics

  > when editing `<script>`, `<template>` block delay 1000ms make diagnosis

  > when editing `<template>`, `<script>` block delay 1000ms make diagnosis

### 0.17.5

- pref: faster default formatter
- pref: faster diagnostics

### 0.17.4

- fix: can't disable html mirror cursor
- feat: improve folding range

### 0.17.3

- feat: improve html mirror cursor
- feat: improve default formatter

### 0.17.2

- fix: `<script setup>` crash corner cases
- fix: diagnostic feature was accidentally disabled in v0.17.1

### 0.17.1

- pref: prevent auto close tag blocked by autocomplete
- pref: faster semantic tokens

### 0.17.0

- feat: ts semantic tokens
- feat: faster auto close tag
- chore: remove icon avoid it like a virus in marketplace

### 0.16.15

- pref: prevent semantic tokens request block autocomplete request (occurred in 0.16.4)
- feat: improve ts autocomplete

### 0.16.14

- feat: pure type defineEmit() syntax support
- feat: increase support emits overloads nums to 16
- fix: pure type defineProps properties required incorrect
- fix: monorepo services can't update cross root scripts
- fix: `<script setup>` formatting broke in 0.16.13

### 0.16.13

- fix: crash if allowJs not set and working on js script block
- fix: crash with user action when server not ready

### 0.16.12

- feat: html mirror cursor

### 0.16.11

- feat: support directives syntax `:=`, `@=`, `#=`
- fix: v-slot bind properties missing attribute values
- fix: template validation broke with v-slot bind properties
- fix: slot services disturbed slot element hover info

### 0.16.10

- feat: reference, rename, definition support to js

### 0.16.9

- feat: template validation support to js
- fix: should not error when css class not exist
- fix: inline style hover info wrong mapping

### 0.16.8

- feat: slot name services (find references, goto definition, diagnostic, completion, hover info)

### 0.16.7

- fix: call graph links incomplete

### 0.16.6

- fix: find references crash in node_modules files

### 0.16.5

- feat: restart server command
- fix: auto import not working for .vue files

### 0.16.4

- fix: can't use export default with `<script>` when `<script setup>` exist
- fix: auto import items should not show virtual files
- fix: style attr services broke
- fix: v-for elements types incorrect
- refactor: sensitive semantic tokens update

### 0.16.3

- feat: inline css service within `<template>`

### 0.16.2

- fix: `<script setup>` formatting wrongly replace `ref:` to `ref`

### 0.16.1

- fix: fix some Call Hierarchy failed cases
- pref: faster typescript language service for new `<script setup>`


### 0.16.0

- feat: [Call Hierarchy](https://code.visualstudio.com/updates/v1_33#_call-hierarchy) support
- feat: auto declare `__VLS_GlobalComponents` by `app.component()` calls

### 0.15.x

TODO
