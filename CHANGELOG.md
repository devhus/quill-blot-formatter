# Changelog

## [v1.1.0] - 2021-02-05

### Changed

- updated dependencies to last versions (babel, eslint, flow and webpack) and update config files accordingly
- updated styles of resize handles to make them more mobile-friendly
- updated package.json with info of the fork

### Added

- Added support for pointer events on touch screens

### Fixed

- Fixed flow errors for type declarations

## [v1.0.5] - 2018-03-28

### Changed

- updated demo link in README

## [v1.0.4] - 2018-02-05

### Changed

- when ResizeAction finishes (mouse up) set the `height` and `width` attributes rather than the `style`. This emits the text-change quill event and updates the document which can be seen in quill.getContents()

### Fixed

- typescript definition for `BlotSpec.getActions()` and `Options.specs`

## [v1.0.3] - 2018-01-15

### Added

- TypeScript definitions
