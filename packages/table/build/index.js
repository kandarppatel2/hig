'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var ThemeContext = require('@hig/theme-context');
var emotion = require('emotion');
var reactTable = require('react-table');
var reactTableSticky = require('react-table-sticky');
var Checkbox = require('@hig/checkbox');
var behaviors = require('@hig/behaviors');
var icons = require('@hig/icons');
var dateFns = require('date-fns');
var isValid = require('date-fns/isValid');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var ThemeContext__default = /*#__PURE__*/_interopDefaultLegacy(ThemeContext);
var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox);
var isValid__default = /*#__PURE__*/_interopDefaultLegacy(isValid);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function stylesheet(props, themeData, themeMeta) {
  const {
    alternateBg,
    cellColumnIndex,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    hasHover,
    headerBackgroundColor,
    headerIndex,
    isLast,
    isPressed,
    isResizing,
    isStickyColumn,
    isStickyHeader,
    multiSelectedColumn,
    multiSelectedColumnLeft,
    multiSelectedRow,
    multiSelectedRowBottom,
    rowIndex,
    rowSelection,
    selected,
    selectedBottom,
    selectedLeft,
    customStylesheet,
    isGrouped
  } = props;
  const isHighDensity = (themeMeta === null || themeMeta === void 0 ? void 0 : themeMeta.densityId) === `high-density`;
  const alternateBgColor = rowIndex % 2 === 0 ? themeData["table.row.backgroundColor"] : themeData["table.zebraStripe.backgroundColor"];
  const styles = {
    higTable: _objectSpread2({
      color: themeData["table.fontColor"],
      display: "block",
      fontFamily: themeData["table.fontFamily"],
      fontSize: themeData["table.fontSize"],
      fontWeight: themeData["table.cell.fontWeight"],
      lineHeight: themeData["table.lineHeight"],
      outline: 0,
      position: `relative`
    }, isStickyColumn || isStickyHeader ? {
      overflow: `auto`
    } : {}),
    higTableHold: {
      display: "none"
    },
    higTableRow: _objectSpread2({
      boxSizing: `border-box`,
      width: `100%`
    }, alternateBg ? {
      background: alternateBgColor
    } : {
      background: themeData["table.row.backgroundColor"]
    }),
    higTableHeaderWrapper: _objectSpread2(_objectSpread2({}, isStickyColumn || isStickyHeader ? {
      position: `sticky`,
      top: 0,
      zIndex: 10
    } : {}), isGrouped ? {
      borderBottom: `1px solid #ddd`
    } : {}),
    higTableHeader: _objectSpread2(_objectSpread2({
      backgroundColor: headerBackgroundColor || themeData["colorScheme.surface.level100"],
      fontWeight: themeData["table.cell.fontWeight"],
      margin: 0,
      opacity: 1,
      position: `relative`
    }, selected ? {
      "&[data-cell-coords]": {
        backgroundColor: themeData["table.header.unselected.hover.backgroundColor"]
      }
    } : {}), {}, {
      "&:first-of-type": {
        "& > div": {
          borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`
        }
      }
    }),
    higTableHeaderContentWrapper: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
      alignItems: `center`,
      backgroundColor: themeData["table.header.backgroundColor"],
      borderTop: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      borderRight: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      boxSizing: `border-box`,
      display: `flex`,
      height: themeData["table.cell.minHeight"],
      lineHeight: themeData["table.cell.minHeight"],
      padding: `0 ${themeData["table.cell.paddingHorizontal"]}`,
      transition: `background-color 0.1s ease-in-out`
    }, columnSelection && hasHover ? {
      backgroundColor: themeData["table.header.unselected.hover.backgroundColor"]
    } : {}), columnSelection && isPressed ? {
      backgroundColor: themeData["table.header.unselected.pressed.backgroundColor"]
    } : {}), headerIndex >= 0 ? {
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      whiteSpace: `nowrap`
    } : {}), rowSelection && headerIndex < 0 ? {
      justifyContent: `center`
    } : {}),
    higTableHeaderRow: {
      "&:not(:last-child)": {
        pointerEvents: `none`
      }
    },
    higTableHeaderResizer: _objectSpread2({
      background: `transparent`,
      display: `flex`,
      height: `100%`,
      justifyContent: `center`,
      position: `absolute`,
      right: `-2px`,
      top: 0,
      touchAction: `none`,
      transition: `background-color 0.1s ease-in-out`,
      width: `5px`,
      zIndex: 1
    }, isResizing ? {
      "&::before": {
        content: `""`,
        borderRight: `1px solid ${themeData[`table.resize.pressed.borderColor`]}`
      }
    } : {}),
    higTableBody: _objectSpread2({
      position: `relative`
    }, frozenHeader ? {
      maxHeight: `calc((${themeData["table.cell.minHeight"]} * ${frozenHeaderCount || 50}) + 1px)`
    } : {}),
    higTableCell: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
      alignItems: `center`,
      borderRight: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      borderTop: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      boxSizing: `border-box`,
      display: `flex`,
      height: themeData["table.cell.minHeight"],
      margin: 0,
      opacity: 1,
      padding: `${themeData["table.cell.paddingVertical"]} ${themeData["table.cell.paddingHorizontal"]}`,
      position: `relative`,
      transition: `background-color 0.1s ease-in-out`
    }, isResizing ? {
      borderRight: `1px solid ${themeData["table.resize.pressed.borderColor"]}`
    } : {}), isLast ? {
      borderBottom: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`
    } : {}), cellColumnIndex === -1 ? {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    } : {}), hasHover && cellColumnIndex !== -1 ? {
      backgroundColor: themeData["table.row.unselected.hover.backgroundColor"]
    } : {}), isPressed && cellColumnIndex !== -1 ? {
      backgroundColor: themeData["table.cell.unselected.pressed.backgroundColor"]
    } : {}), selected ? {
      backgroundColor: `transparent`,
      borderRight: `1px solid ${themeData["table.row.selected.default.borderColor"]}`,
      borderTop: `1px solid ${themeData["table.row.selected.default.borderColor"]}`
    } : {}), selected && isLast ? {
      borderBottom: `1px solid ${themeData["table.row.selected.default.borderColor"]}`
    } : {}), selectedBottom ? {
      borderTop: `1px solid ${themeData["table.row.selected.default.borderColor"]}`
    } : {}), selectedLeft ? {
      borderRight: `1px solid ${themeData["table.row.selected.default.borderColor"]}`
    } : {}), multiSelectedColumn ? {
      backgroundColor: themeData["table.cell.multiSelect.default.backgroundColor"],
      borderRight: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`
    } : {}), multiSelectedColumn && isLast ? {
      borderBottom: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`
    } : {}), multiSelectedColumnLeft ? {
      borderRight: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`
    } : {}), multiSelectedRow ? {
      backgroundColor: themeData["table.cell.multiSelect.default.backgroundColor"],
      borderTopColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`
    } : {}), multiSelectedRowBottom ? {
      borderTopColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`
    } : {}), multiSelectedRow && multiSelectedRowBottom ? {
      borderTopColor: `none`
    } : {}), multiSelectedRow && isLast ? {
      borderBottomColor: `${themeData["table.cell.multiSelect.focus.borderColor"]}`
    } : {}), {}, {
      "&:first-of-type": _objectSpread2(_objectSpread2({
        borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`
      }, selected ? {
        borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["table.row.selected.default.borderColor"]}`
      } : {}), multiSelectedColumn ? {
        borderLeft: `1px solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`
      } : {}),
      "&:last-of-type": _objectSpread2({
        borderLeft: `none`
      }, multiSelectedColumn ? {
        borderRight: `${themeData["table.borderWidth"]} solid ${themeData["table.cell.multiSelect.focus.borderColor"]}`
      } : {})
    }),
    higTableCellContentWrapper: _objectSpread2({
      display: `flex`
    }, cellColumnIndex >= 0 ? {
      display: `block`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      whiteSpace: `nowrap`
    } : {}),
    higTableCustomExpander: {
      display: `block`,
      borderLeft: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`,
      borderRight: `${themeData["table.borderWidth"]} solid ${themeData["colorScheme.divider.lightweight"]}`
    },
    headerHolder: {
      whiteSpace: `nowrap`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      minWidth: `10px`
    },
    headerHolderSelection: {
      display: `flex`
    },
    groupHeaderElement: {
      padding: `3px 3px 0 0`
    },
    higGroupedLabel: {
      display: `flex`
    },
    higGroupedDataCount: {
      paddingLeft: `5px`,
      fontWeight: `500`
    },
    higGroupedCheckToggle: {
      position: `absolute`,
      left: isHighDensity ? `12px` : `10px`,
      paddingTop: isHighDensity ? `2px` : `0`
    }
  };
  return customStylesheet ? customStylesheet(styles, props, themeData, themeMeta) : styles;
}

const _excluded$3 = ["children", "columnSelection", "headerIndex", "isSelectableHeader", "isSortPassed", "onClick", "rowSelection", "setActiveMultiSelectColumn", "onSortClick", "setIsSortedDesc", "isSortedDesc"];
function TableHeaderCellPresenter(props) {
  const {
    children,
    columnSelection,
    headerIndex,
    isSelectableHeader,
    isSortPassed,
    onClick,
    rowSelection,
    setActiveMultiSelectColumn,
    onSortClick,
    setIsSortedDesc,
    isSortedDesc
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded$3);

  const {
    globalResizeStyles
  } = otherProps;
  const handleClick = React.useCallback(event => {
    if (isSortPassed && onClick && !columnSelection) {
      setIsSortedDesc(!isSortedDesc);

      if (onSortClick) {
        onSortClick(event, props, headerIndex);
      }

      onClick(event);
    } // no column selection for multirow selection checkboxes


    if (headerIndex === -1 || !columnSelection) {
      return;
    }

    setActiveMultiSelectColumn(headerIndex);
  }, [columnSelection, headerIndex, isSortPassed, onClick, setActiveMultiSelectColumn, onSortClick]);

  const payload = _objectSpread2({}, otherProps);

  const rowOffset = rowSelection ? 1 : 0;
  const resizeStyles = (globalResizeStyles === null || globalResizeStyles === void 0 ? void 0 : globalResizeStyles[headerIndex + rowOffset]) || {};
  delete payload.activeMultiSelectColumn;
  delete payload.columnHeaderArray;
  delete payload.hasHover;
  delete payload.headerBackgroundColor;
  delete payload.isPressed;
  delete payload.isSortPassed;
  delete payload.setActiveMultiSelectColumn;
  delete payload.customStylesheet;
  delete payload.globalResizeStyles; // remove resize inline style and move to emotion styles

  delete payload.style;
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext__default["default"].Consumer, null, _ref => {
    let {
      resolvedRoles,
      metadata
    } = _ref;
    const styles = stylesheet(props, resolvedRoles, metadata);

    const mergedStyles = _objectSpread2(_objectSpread2({}, styles.higTableHeader), resizeStyles);

    return (
      /*#__PURE__*/

      /* eslint-disable-next-line */
      React__default["default"].createElement("div", _extends({}, payload, {
        className: emotion.css(mergedStyles),
        onClick: handleClick
      }, isSelectableHeader ? {
        "data-cell-coords": `${headerIndex}_-1`
      } : {}), /*#__PURE__*/React__default["default"].createElement("div", {
        className: emotion.css(styles.higTableHeaderContentWrapper)
      }, children))
    );
  });
}
TableHeaderCellPresenter.propTypes = {
  children: PropTypes__default["default"].node,
  columnSelection: PropTypes__default["default"].bool,
  headerIndex: PropTypes__default["default"].number,
  isSelectableHeader: PropTypes__default["default"].bool,
  isSortPassed: PropTypes__default["default"].func,
  onClick: PropTypes__default["default"].func,
  setActiveMultiSelectColumn: PropTypes__default["default"].func,
  onSortClick: PropTypes__default["default"].func,
  rowSelection: PropTypes__default["default"].bool,
  setIsSortedDesc: PropTypes__default["default"].func,
  isSortedDesc: PropTypes__default["default"].bool
};

function TableHeaderCell(props) {
  const {
    onSortClick
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(behaviors.HoverBehavior, {
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave
  }, _ref => {
    let {
      hasHover,
      onMouseEnter: handleMouseEnter,
      onMouseLeave
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(behaviors.PressedBehavior, {
      onMouseDown: props.onMouseDown,
      onMouseUp: props.onMouseUp,
      onMouseLeave: onMouseLeave
    }, _ref2 => {
      let {
        isPressed,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onPressedMouseLeave: handlePressedMouseLeave
      } = _ref2;
      return /*#__PURE__*/React__default["default"].createElement(TableHeaderCellPresenter, _extends({
        hasHover: hasHover,
        isPressed: isPressed,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseUp: handleMouseUp,
        onMouseLeave: handlePressedMouseLeave,
        onSortClick: onSortClick
      }, props));
    });
  });
}
TableHeaderCell.propTypes = {
  onMouseEnter: PropTypes__default["default"].func,
  onMouseLeave: PropTypes__default["default"].func,
  onMouseDown: PropTypes__default["default"].func,
  onMouseUp: PropTypes__default["default"].func,
  onSortClick: PropTypes__default["default"].func
};
TableHeaderCell.__docgenInfo = {
  "description": "",
  "displayName": "TableHeaderCell",
  "props": {
    "onMouseEnter": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseLeave": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseDown": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseUp": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onSortClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};

const styles$1 = {
  marginBottom: "20px"
};

const GlobalFilter = _ref => {
  let {
    filter,
    setFilter,
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: emotion.css(styles$1)
  }, children({
    filter,
    setFilter
  }));
};

GlobalFilter.propTypes = {
  children: PropTypes__default["default"].func,
  filter: PropTypes__default["default"].string,
  setFilter: PropTypes__default["default"].func
};
GlobalFilter.__docgenInfo = {
  "description": "",
  "displayName": "GlobalFilter",
  "props": {
    "children": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "filter": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "setFilter": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};

/* eslint-disable react/forbid-prop-types */

const ColumnShowHide = _ref => {
  let {
    allColumns,
    children,
    columnHeaderArray,
    setColumnHeaderArray,
    toggleHideAllColumnsProps
  } = _ref;

  const filteredSetColumnHeaderArray = headerArray => {
    const lowerCaseHeaderCopy = headerArray.map(item => item.split(" ").join("").toLowerCase());
    const preOrderedArray = allColumns === null || allColumns === void 0 ? void 0 : allColumns.filter(column => lowerCaseHeaderCopy.indexOf(column.id.split(" ").join("").toLowerCase()) > -1 || (column === null || column === void 0 ? void 0 : column.Header) === "").map(item => item.Header);
    setColumnHeaderArray(preOrderedArray);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", null, children({
    allColumns,
    columnHeaderArray,
    setColumnHeaderArray: filteredSetColumnHeaderArray,
    toggleHideAllColumnsProps
  }));
};

ColumnShowHide.propTypes = {
  allColumns: PropTypes__default["default"].array,
  children: PropTypes__default["default"].func,
  columnHeaderArray: PropTypes__default["default"].array,
  setColumnHeaderArray: PropTypes__default["default"].func,
  toggleHideAllColumnsProps: PropTypes__default["default"].func
};

const SortColumns = _ref => {
  let {
    children,
    isSorted,
    isSortedDesc,
    density
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children({
    isSorted,
    isSortedDesc,
    density
  }));
};

SortColumns.propTypes = {
  children: PropTypes__default["default"].func,
  isSorted: PropTypes__default["default"].bool,
  isSortedDesc: PropTypes__default["default"].bool,
  density: PropTypes__default["default"].string
};
SortColumns.__docgenInfo = {
  "description": "",
  "displayName": "SortColumns",
  "props": {
    "children": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isSorted": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isSortedDesc": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "density": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};

const GroupHeaderElements = _ref => {
  let {
    isGrouped,
    groupHeaderElementStyles
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: emotion.css(groupHeaderElementStyles)
  }, isGrouped ? /*#__PURE__*/React__default["default"].createElement(icons.CaretDown16, null) : /*#__PURE__*/React__default["default"].createElement(icons.CaretRight16, null));
};

GroupHeaderElements.propTypes = {
  isGrouped: PropTypes__default["default"].bool,
  groupHeaderElementStyles: PropTypes__default["default"].shape({
    styles: PropTypes__default["default"].string
  })
};
GroupHeaderElements.__docgenInfo = {
  "description": "",
  "displayName": "GroupHeaderElements",
  "props": {
    "isGrouped": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "groupHeaderElementStyles": {
      "type": {
        "name": "shape",
        "value": {
          "styles": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};

/* eslint-disable react/forbid-prop-types */
const styles = {
  padding: "20px",
  width: "100%"
};

const Pagination = _ref => {
  let {
    pageDetails,
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: emotion.css(styles)
  }, children(pageDetails));
};

Pagination.propTypes = {
  children: PropTypes__default["default"].func,
  pageDetails: PropTypes__default["default"].shape({
    pageIndex: PropTypes__default["default"].number,
    pageOptions: PropTypes__default["default"].array,
    previousPage: PropTypes__default["default"].func,
    nextPage: PropTypes__default["default"].func,
    canPreviousPage: PropTypes__default["default"].bool,
    canNextPage: PropTypes__default["default"].bool
  })
};
Pagination.__docgenInfo = {
  "description": "",
  "displayName": "Pagination",
  "props": {
    "children": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "pageDetails": {
      "type": {
        "name": "shape",
        "value": {
          "pageIndex": {
            "name": "number",
            "required": false
          },
          "pageOptions": {
            "name": "array",
            "required": false
          },
          "previousPage": {
            "name": "func",
            "required": false
          },
          "nextPage": {
            "name": "func",
            "required": false
          },
          "canPreviousPage": {
            "name": "bool",
            "required": false
          },
          "canNextPage": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};

/* eslint-disable react/forbid-prop-types */

const DataGroupComponent = _ref => {
  let {
    children,
    styles,
    groupNames,
    count,
    data,
    dataGroup,
    allMultiSelectedRows,
    activeMultiSelectRowArray,
    setActiveMultiSelectRowArray,
    setAllMultiSelectedRows,
    getOffset,
    checkboxToggle,
    setCheckboxToggle
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", null, children({
    styles,
    groupNames,
    count,
    data,
    dataGroup,
    allMultiSelectedRows,
    activeMultiSelectRowArray,
    setActiveMultiSelectRowArray,
    setAllMultiSelectedRows,
    getOffset,
    checkboxToggle,
    setCheckboxToggle
  }));
};

DataGroupComponent.propTypes = {
  children: PropTypes__default["default"].func,
  styles: PropTypes__default["default"].any,
  groupNames: PropTypes__default["default"].any,
  count: PropTypes__default["default"].number,
  data: PropTypes__default["default"].any,
  dataGroup: PropTypes__default["default"].any,
  allMultiSelectedRows: PropTypes__default["default"].func,
  activeMultiSelectRowArray: PropTypes__default["default"].func,
  setActiveMultiSelectRowArray: PropTypes__default["default"].func,
  setAllMultiSelectedRows: PropTypes__default["default"].func,
  getOffset: PropTypes__default["default"].func,
  checkboxToggle: PropTypes__default["default"].bool,
  setCheckboxToggle: PropTypes__default["default"].func
};
DataGroupComponent.__docgenInfo = {
  "description": "",
  "displayName": "DataGroupComponent",
  "props": {
    "children": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "styles": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "groupNames": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "count": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "data": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "dataGroup": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "allMultiSelectedRows": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "activeMultiSelectRowArray": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "setActiveMultiSelectRowArray": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "setAllMultiSelectedRows": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "getOffset": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "checkboxToggle": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "setCheckboxToggle": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};

const DateFormatter = cell => {
  const cellDate = new Date(cell.render("Cell").props.value);
  return isValid__default["default"](cellDate) ? dateFns.format(cellDate, "dd/MM/yyyy") : "invalid date";
};

DateFormatter.propTypes = {
  cell: PropTypes__default["default"].shape({
    render: PropTypes__default["default"].func
  })
};

const _excluded$2 = ["cellColumnIndex", "cellRowIndex", "children", "multiSelectedColumn", "selected", "setActiveColumnIndex", "setActiveMultiSelectColumn", "setActiveRowIndex", "onTableCellClick", "activeMultiSelectRowArray", "setAllMultiSelectedRows", "setActiveMultiSelectRowArray", "rowSelection", "rowTypeToMap"];
function TableDataCellPresenter(props) {
  const {
    cellColumnIndex,
    cellRowIndex,
    children,
    multiSelectedColumn,
    selected,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveRowIndex,
    onTableCellClick,
    activeMultiSelectRowArray,
    setAllMultiSelectedRows,
    setActiveMultiSelectRowArray,
    rowSelection,
    rowTypeToMap
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded$2);

  const {
    globalResizeStyles
  } = otherProps;
  const handleCellClick = React.useCallback(event => {
    if (onTableCellClick) {
      onTableCellClick(event, {
        props
      });
    } // don't select when multi-select row cell clicked
    // only select when checkbox is clicked


    if (cellColumnIndex === -1) {
      return;
    }

    setActiveColumnIndex(cellColumnIndex);
    setActiveRowIndex(cellRowIndex);
    setActiveMultiSelectColumn(null);
  }, [cellColumnIndex, cellRowIndex, setActiveColumnIndex, setActiveRowIndex, setActiveMultiSelectColumn, activeMultiSelectRowArray, setAllMultiSelectedRows, setActiveMultiSelectRowArray, rowTypeToMap]);

  const payload = _objectSpread2({}, otherProps);

  const rowOffset = rowSelection ? 1 : 0;
  const resizeStyles = (globalResizeStyles === null || globalResizeStyles === void 0 ? void 0 : globalResizeStyles[cellColumnIndex + rowOffset]) || {};
  delete payload.columnHeaderArray;
  delete payload.hasHover;
  delete payload.isLast;
  delete payload.isPressed;
  delete payload.isResizing;
  delete payload.multiSelectedColumnLeft;
  delete payload.multiSelectedRow;
  delete payload.multiSelectedRowBottom;
  delete payload.selectedBottom;
  delete payload.selectedLeft;
  delete payload.customStylesheet;
  delete payload.globalResizeStyles; // remove resize inline style and move to emotion styles

  delete payload.style;
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext__default["default"].Consumer, null, _ref => {
    let {
      resolvedRoles,
      metadata
    } = _ref;
    const styles = stylesheet(props, resolvedRoles, metadata);

    const mergedStyles = _objectSpread2(_objectSpread2({}, resizeStyles), styles.higTableCell);

    return (
      /*#__PURE__*/

      /* eslint-disable-next-line */
      React__default["default"].createElement("div", _extends({}, payload, {
        className: emotion.css(mergedStyles),
        "data-cell-coords": `${cellColumnIndex}_${cellRowIndex}`,
        onClick: handleCellClick
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: emotion.css(styles.higTableCellContentWrapper)
      }, children))
    );
  });
}
TableDataCellPresenter.propTypes = {
  cellColumnIndex: PropTypes__default["default"].number,
  cellRowIndex: PropTypes__default["default"].number,
  children: PropTypes__default["default"].node,
  multiSelectedColumn: PropTypes__default["default"].bool,
  selected: PropTypes__default["default"].bool,
  setActiveColumnIndex: PropTypes__default["default"].func,
  setActiveMultiSelectColumn: PropTypes__default["default"].func,
  setActiveRowIndex: PropTypes__default["default"].func,
  onTableCellClick: PropTypes__default["default"].func,
  activeMultiSelectRowArray: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  setAllMultiSelectedRows: PropTypes__default["default"].func,
  setActiveMultiSelectRowArray: PropTypes__default["default"].func,
  // eslint-disable-next-line react/forbid-prop-types
  rowTypeToMap: PropTypes__default["default"].arrayOf(PropTypes__default["default"].any),
  rowSelection: PropTypes__default["default"].bool
};

function TableDataCell(props) {
  return /*#__PURE__*/React__default["default"].createElement(behaviors.HoverBehavior, {
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave
  }, _ref => {
    let {
      hasHover,
      onMouseEnter: handleMouseEnter,
      onMouseLeave
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(behaviors.PressedBehavior, {
      onMouseDown: props.onMouseDown,
      onMouseUp: props.onMouseUp,
      onMouseLeave: onMouseLeave
    }, _ref2 => {
      let {
        isPressed,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onPressedMouseLeave: handlePressedMouseLeave
      } = _ref2;
      return /*#__PURE__*/React__default["default"].createElement(TableDataCellPresenter, _extends({
        hasHover: hasHover,
        isPressed: isPressed,
        onMouseDown: handleMouseDown,
        onMouseEnter: handleMouseEnter,
        onMouseUp: handleMouseUp,
        onMouseLeave: handlePressedMouseLeave
      }, props));
    });
  });
}
TableDataCell.propTypes = {
  onMouseEnter: PropTypes__default["default"].func,
  onMouseLeave: PropTypes__default["default"].func,
  onMouseDown: PropTypes__default["default"].func,
  onMouseUp: PropTypes__default["default"].func
};
TableDataCell.__docgenInfo = {
  "description": "",
  "displayName": "TableDataCell",
  "props": {
    "onMouseEnter": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseLeave": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseDown": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onMouseUp": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};

const renderCellData = function () {
  let formatDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let cell = arguments.length > 1 ? arguments[1] : undefined;
  if (!formatDate) return cell.render("Cell");
  return cell.column.Header === "Date" ? DateFormatter(cell) : cell.render("Cell");
};

const TableDataContents = _ref => {
  let {
    getTableBodyProps,
    styles,
    rowTypeToMap,
    alternateBg,
    customContentArray,
    customStylesheet,
    resolvedRoles,
    metadata,
    prepareRow,
    rowSpreadProps,
    columnHeaderArray,
    getOffset,
    activeMultiSelectColumn,
    activeMultiSelectRowArray,
    activeColumnIndex,
    activeRowIndex,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveRowIndex,
    onTableCellClick,
    setAllMultiSelectedRows,
    setActiveMultiSelectRowArray,
    paginateDynamic,
    rows,
    meta,
    page,
    isGrouped,
    tableObject,
    globalColumns,
    globalResizeStyles,
    rowSelection
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, getTableBodyProps(), {
    className: emotion.css(styles.higTableBody)
  }), rowTypeToMap.map((row, rowIndex) => {
    const rowStyles = stylesheet({
      alternateBg,
      isCustomeContentExpanded: customContentArray[rowIndex],
      rowIndex,
      customStylesheet
    }, resolvedRoles, metadata);
    prepareRow(row);
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: `table-body-row-${rowIndex}`
    }, /*#__PURE__*/React__default["default"].createElement("div", _extends({}, row.getRowProps(), rowSpreadProps, {
      className: emotion.css(rowStyles.higTableRow)
    }), row.cells.map((cell, cellIndex) => {
      const cellColumnIndex = columnHeaderArray.indexOf(cell.column.Header);
      const cellRowIndex = isGrouped ? rowIndex + getOffset() : rowIndex;
      const totalRows = rowTypeToMap.length || tableObject.data.length;
      const headerIndexOffset = rowSelection ? 1 : 0;

      if (cellColumnIndex === -1 && typeof cell.column.Header === "function" || cellColumnIndex > -1) {
        var _globalColumns;

        return /*#__PURE__*/React__default["default"].createElement(TableDataCell, _extends({}, cell.getCellProps(), {
          cellColumnIndex: cellColumnIndex,
          cellRowIndex: cellRowIndex,
          columnHeaderArray: columnHeaderArray,
          isLast: rowIndex + 1 === totalRows,
          isResizing: globalColumns === null || globalColumns === void 0 ? void 0 : (_globalColumns = globalColumns[cellColumnIndex + headerIndexOffset]) === null || _globalColumns === void 0 ? void 0 : _globalColumns.isResizing,
          key: `table-data-cell-${cellIndex}`,
          multiSelectedColumn: activeMultiSelectColumn === cellColumnIndex,
          multiSelectedColumnLeft: activeMultiSelectColumn !== null && activeMultiSelectColumn - 1 === cellColumnIndex,
          multiSelectedRow: activeMultiSelectRowArray === null || activeMultiSelectRowArray === void 0 ? void 0 : activeMultiSelectRowArray.includes(cellRowIndex),
          multiSelectedRowBottom: activeMultiSelectRowArray === null || activeMultiSelectRowArray === void 0 ? void 0 : activeMultiSelectRowArray.includes(cellRowIndex - 1),
          selected: activeColumnIndex === cellColumnIndex && activeRowIndex === cellRowIndex,
          selectedBottom: activeColumnIndex === cellColumnIndex && activeRowIndex + 1 === cellRowIndex && activeRowIndex !== -1,
          selectedLeft: activeColumnIndex - 1 === cellColumnIndex && activeRowIndex === cellRowIndex,
          setActiveColumnIndex: setActiveColumnIndex,
          setActiveMultiSelectColumn: setActiveMultiSelectColumn,
          setActiveRowIndex: setActiveRowIndex,
          onTableCellClick: onTableCellClick,
          activeMultiSelectRowArray: activeMultiSelectRowArray,
          setAllMultiSelectedRows: setAllMultiSelectedRows,
          setActiveMultiSelectRowArray: setActiveMultiSelectRowArray,
          rowTypeToMap: paginateDynamic ? rows : page,
          customStylesheet: customStylesheet,
          globalResizeStyles: globalResizeStyles,
          rowSelection: rowSelection
        }), cell.isGrouped ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", row.getToggleRowExpandedProps(), /*#__PURE__*/React__default["default"].createElement(GroupElements, {
          isExpanded: row.isExpanded
        }, meta.groupElements)), " ", renderCellData(meta.formatDate, cell), " (", row.subRows.length, ")") : cell.isAggregated ? cell.render("Aggregated") : cell.isPlaceholder ? null : renderCellData(meta.formatDate, cell));
      } else {
        return null;
      }
    })));
  }));
};

TableDataContents.propTypes = {
  getTableBodyProps: PropTypes__default["default"].func,
  styles: PropTypes__default["default"].any,
  rowTypeToMap: PropTypes__default["default"].any,
  alternateBg: PropTypes__default["default"].any,
  customContentArray: PropTypes__default["default"].any,
  customStylesheet: PropTypes__default["default"].any,
  resolvedRoles: PropTypes__default["default"].any,
  metadata: PropTypes__default["default"].any,
  prepareRow: PropTypes__default["default"].any,
  rowSpreadProps: PropTypes__default["default"].any,
  columnHeaderArray: PropTypes__default["default"].any,
  getOffset: PropTypes__default["default"].func,
  activeMultiSelectColumn: PropTypes__default["default"].func,
  activeMultiSelectRowArray: PropTypes__default["default"].func,
  activeColumnIndex: PropTypes__default["default"].number,
  activeRowIndex: PropTypes__default["default"].number,
  setActiveColumnIndex: PropTypes__default["default"].func,
  setActiveMultiSelectColumn: PropTypes__default["default"].func,
  setActiveRowIndex: PropTypes__default["default"].func,
  onTableCellClick: PropTypes__default["default"].func,
  setAllMultiSelectedRows: PropTypes__default["default"].func,
  setActiveMultiSelectRowArray: PropTypes__default["default"].func,
  paginateDynamic: PropTypes__default["default"].bool,
  rows: PropTypes__default["default"].any,
  meta: PropTypes__default["default"].any,
  page: PropTypes__default["default"].any,
  isGrouped: PropTypes__default["default"].bool,
  tableObject: PropTypes__default["default"].any,
  globalColumns: PropTypes__default["default"].any,
  globalResizeStyles: PropTypes__default["default"].any,
  rowSelection: PropTypes__default["default"].bool
};

const RenderTable = _ref => {
  let {
    params,
    passedData,
    passedCount
  } = _ref;
  const {
    dataArray,
    isGrouped,
    columns,
    meta,
    groupNames,
    hiddenColumns,
    defaultSelectedRows,
    alternateBg,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    headerBackgroundColor,
    headerRowSpreadProps,
    paginateDynamic,
    rowSpreadProps,
    rowSelection,
    setHeaderRef,
    setTableRef,
    setTotalRows,
    tableObject,
    tableSpreadProps,
    onTableCellClick,
    onSortClick,
    customStylesheet,
    tableGroupSelectAll: {
      checkboxToggle = [],
      setCheckboxToggle = () => {}
    },
    otherProps
  } = params || {};
  const data = passedData || dataArray;
  const count = passedCount || 0;

  const getOffset = () => {
    const newDataArray = dataArray || [];
    const totalArray = [];

    if (!dataArray) {
      return 0;
    }

    if (count === 0) {
      return 0;
    } // eslint-disable-next-line no-plusplus


    for (let i = 0; i < count; i++) {
      totalArray.push(newDataArray[i].length);
    }

    return totalArray.reduce((a, b) => a + b, 0);
  };

  const defaultColumn = React.useMemo(() => ({
    minWidth: 30,
    width: 150,
    maxWidth: 400
  }));
  const {
    activeColumnIndex,
    activeMultiSelectColumn,
    activeMultiSelectRowArray,
    activeRowIndex,
    allMultiSelectedRows,
    columnHeaderArray,
    handleFocus,
    handleKeyDown,
    setActiveColumnIndex,
    setActiveMultiSelectColumn,
    setActiveMultiSelectRowArray,
    setActiveRowIndex,
    setAllMultiSelectedRows,
    setColumnHeaderArray,
    globalColumns,
    setGlobalColumns,
    globalResizeStyles,
    setGlobalResizeStyles
  } = otherProps;
  const layoutTypeWrap = reactTable.useFlexLayout;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps
  } = reactTable.useTable({
    columns,
    data,
    defaultColumn,
    getSubRows: row => row.subRows,
    autoResetExpanded: false
  }, reactTable.useResizeColumns, layoutTypeWrap, reactTableSticky.useSticky, reactTable.useFilters, reactTable.useGlobalFilter, reactTable.useGroupBy, reactTable.useSortBy, reactTable.useExpanded, reactTable.usePagination, reactTable.useRowSelect, hooks => {
    hooks.visibleColumns.push(defaultColumns => {
      defaultColumns[0] = _objectSpread2(_objectSpread2({}, defaultColumns[0]), {}, {
        Cell: _ref2 => {
          let {
            row,
            value
          } = _ref2;
          return /*#__PURE__*/React__default["default"].createElement("span", {
            style: {
              paddingLeft: row.depth * 2 + "rem"
            }
          }, row.canExpand ? /*#__PURE__*/React__default["default"].createElement("span", row.getToggleRowExpandedProps({
            style: {
              paddingRight: '8px'
            }
          }), row.isExpanded ? /*#__PURE__*/React__default["default"].createElement(icons.CaretDownSUI, null) : /*#__PURE__*/React__default["default"].createElement(icons.CaretRightSUI, null)) : null, " ", value);
        }
      });

      if (rowSelection) {
        return [{
          id: "selection",
          disableResizing: true,
          minWidth: 35,
          width: 35,
          maxWidth: 35,
          // eslint-disable-next-line
          Header: () => {
            if (isGrouped) return null;
            return /*#__PURE__*/React__default["default"].createElement(Checkbox__default["default"], {
              checked: allMultiSelectedRows,
              indeterminate: !!(activeMultiSelectRowArray !== null && activeMultiSelectRowArray !== void 0 && activeMultiSelectRowArray.length) && !allMultiSelectedRows,
              onClick: event => {
                event.stopPropagation();
                const allArray = tableObject.data.map((row, index) => index);
                const emptyArray = [];

                if (allMultiSelectedRows || (activeMultiSelectRowArray === null || activeMultiSelectRowArray === void 0 ? void 0 : activeMultiSelectRowArray.length) > 0) {
                  setActiveMultiSelectRowArray(emptyArray);
                  setAllMultiSelectedRows(false);
                } else {
                  setActiveMultiSelectRowArray(allArray);
                  setAllMultiSelectedRows(true);
                }
              },
              tabIndex: -1
            });
          },
          // eslint-disable-next-line
          Cell: _ref3 => {
            let {
              row
            } = _ref3;
            const rowTypeToMap = paginateDynamic ? rows : page;
            const rowIndex = isGrouped ? rowTypeToMap.indexOf(row) + getOffset() : rowTypeToMap.indexOf(row);
            return /*#__PURE__*/React__default["default"].createElement(Checkbox__default["default"], {
              checked: activeMultiSelectRowArray === null || activeMultiSelectRowArray === void 0 ? void 0 : activeMultiSelectRowArray.includes(rowIndex),
              onClick: event => {
                event.stopPropagation();
                const newArray = activeMultiSelectRowArray !== null && activeMultiSelectRowArray !== void 0 && activeMultiSelectRowArray.includes(rowIndex) ? activeMultiSelectRowArray.filter(item => item !== rowIndex) : activeMultiSelectRowArray && [...activeMultiSelectRowArray] || [];

                if (!(activeMultiSelectRowArray !== null && activeMultiSelectRowArray !== void 0 && activeMultiSelectRowArray.includes(rowIndex))) {
                  newArray.push(rowIndex);
                }

                if (rowTypeToMap.length === newArray.length) {
                  setAllMultiSelectedRows(true);
                } else {
                  setAllMultiSelectedRows(false);
                }

                setActiveMultiSelectRowArray(newArray);
              },
              tabIndex: -1
            });
          }
        }, ...defaultColumns];
      }

      return [...defaultColumns];
    });
  });
  const {
    globalFilter,
    pageIndex
  } = state; // eslint-disable-next-line no-unsafe-optional-chaining

  const {
    isStickyHeader,
    isStickyColumns
  } = meta === null || meta === void 0 ? void 0 : meta.stickyItems;
  const [customContentArray] = React.useState([]);
  const pageDetails = {
    canPreviousPage,
    canNextPage,
    nextPage,
    pageOptions,
    pageIndex,
    paginateDynamic,
    previousPage
  };
  const rowTypeToMap = paginateDynamic ? rows : page;
  const [isSortedDesc, setIsSortedDesc] = React.useState(false);
  const [holdTableRender, setHoldTableRender] = React.useState(!!hiddenColumns);

  if (hiddenColumns) {
    setTimeout(() => {
      setHoldTableRender(false);
    }, 1000);
  }

  React.useEffect(() => {
    setTotalRows(rowTypeToMap.map(row => row.subRows && row.isExpanded ? row.subRows.length + 1 : 1).reduce((a, b) => a + b, 0)); // setTotalRows(rowTypeToMap.length);
  });
  React.useEffect(() => {
    if (defaultSelectedRows && (defaultSelectedRows === null || defaultSelectedRows === void 0 ? void 0 : defaultSelectedRows.length) > 0) {
      var _tableObject$data;

      const rowLimit = tableObject.data.length - 1;
      const allArray = (_tableObject$data = tableObject.data) === null || _tableObject$data === void 0 ? void 0 : _tableObject$data.map((row, index) => {
        if (defaultSelectedRows.includes(index) && index <= rowLimit) {
          return index;
        }

        return null;
      }).filter(element => element !== null);
      setActiveMultiSelectRowArray(allArray);
    }
  }, []);
  React.useEffect(() => {
    var _headerGroups$, _headerGroups$$header;

    if (!globalColumns && count === 0) {
      setGlobalColumns(headerGroups[0].headers);
      return;
    }

    if ((globalColumns === null || globalColumns === void 0 ? void 0 : globalColumns.length) !== (headerGroups === null || headerGroups === void 0 ? void 0 : (_headerGroups$ = headerGroups[0]) === null || _headerGroups$ === void 0 ? void 0 : (_headerGroups$$header = _headerGroups$.headers) === null || _headerGroups$$header === void 0 ? void 0 : _headerGroups$$header.length) && count === 0) {
      setGlobalColumns(headerGroups[0].headers);
    }
  });
  React.useLayoutEffect(() => {
    const currentHeaderStyles = headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups[0].headers.map(item => item.getHeaderProps().style);

    if (JSON.stringify(globalResizeStyles) !== JSON.stringify(currentHeaderStyles) && count === 0) {
      setGlobalResizeStyles(currentHeaderStyles);
    }
  });
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.ThemeContext.Consumer, {
    key: count
  }, _ref4 => {
    let {
      resolvedRoles,
      metadata
    } = _ref4;
    const styles = stylesheet({
      isGrouped,
      frozenHeader,
      frozenHeaderCount,
      isStickyColumns,
      isStickyHeader,
      customStylesheet
    }, resolvedRoles, metadata);
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, meta.globalFilter && count === 0 && /*#__PURE__*/React__default["default"].createElement(GlobalFilter, {
      filter: globalFilter,
      setFilter: setGlobalFilter
    }, meta.globalFilter), meta.columnShowHideComponent && count === 0 && /*#__PURE__*/React__default["default"].createElement(ColumnShowHide, {
      toggleHideAllColumnsProps: getToggleHideAllColumnsProps,
      allColumns: allColumns,
      columnHeaderArray: columnHeaderArray,
      setColumnHeaderArray: setColumnHeaderArray
    }, meta.columnShowHideComponent), /*#__PURE__*/React__default["default"].createElement("div", _extends({}, getTableProps(), {
      className: emotion.css(holdTableRender ? styles.higTableHold : styles.higTable),
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      ref: setTableRef,
      tabIndex: (tableSpreadProps === null || tableSpreadProps === void 0 ? void 0 : tableSpreadProps.tabIndex) || 0
    }, tableSpreadProps), /*#__PURE__*/React__default["default"].createElement("div", {
      className: emotion.css(styles.higTableHeaderWrapper),
      ref: setHeaderRef
    }, count === 0 && headerGroups.map((headerGroup, headerGroupIndex) => /*#__PURE__*/React__default["default"].createElement("div", _extends({}, headerGroup.getHeaderGroupProps(), headerRowSpreadProps, {
      className: emotion.css(styles.higTableHeaderRow),
      key: `header-group-${headerGroupIndex}`
    }), headerGroup.headers.map((column, columnIndex) => {
      var _globalColumns, _globalColumns2;

      const headerIndex = columnHeaderArray.indexOf(column.Header);
      const headerIndexOffset = rowSelection ? 1 : 0;
      const resizingStyles = column.canResize || globalColumns !== null && globalColumns !== void 0 && (_globalColumns = globalColumns[headerIndex + headerIndexOffset]) !== null && _globalColumns !== void 0 && _globalColumns.canResize ? stylesheet({
        isResizing: column.isResizing || (globalColumns === null || globalColumns === void 0 ? void 0 : (_globalColumns2 = globalColumns[headerIndex + headerIndexOffset]) === null || _globalColumns2 === void 0 ? void 0 : _globalColumns2.isResizing),
        customStylesheet
      }, resolvedRoles, metadata) : null;
      return /*#__PURE__*/React__default["default"].createElement(TableHeaderCell, _extends({}, column.getHeaderProps(column.getSortByToggleProps()), {
        columnSelection: columnSelection,
        activeMultiSelectColumn: activeMultiSelectColumn,
        columnHeaderArray: columnHeaderArray,
        headerBackgroundColor: headerBackgroundColor,
        headerIndex: headerIndex,
        isSelectableHeader: !column.headers,
        isSortPassed: meta.sortColumns,
        key: `table-header-cell-${columnIndex}`,
        selected: activeColumnIndex === headerIndex && activeRowIndex === -1,
        setActiveMultiSelectColumn: setActiveMultiSelectColumn,
        customStylesheet: customStylesheet,
        globalResizeStyles: globalResizeStyles,
        onSortClick: onSortClick,
        rowSelection: rowSelection,
        setIsSortedDesc: setIsSortedDesc,
        isSortedDesc: isSortedDesc
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: emotion.css(column.id !== "selection" ? styles.headerHolder : styles.headerHolderSelection)
      }, column.canGroupBy && meta.groupElements ? /*#__PURE__*/React__default["default"].createElement("span", column.getGroupByToggleProps(), /*#__PURE__*/React__default["default"].createElement(GroupHeaderElements, {
        groupHeaderElementStyles: styles.groupHeaderElement,
        isGrouped: column.isGrouped
      })) : null, column.render("Header")), /*#__PURE__*/React__default["default"].createElement("div", _extends({}, column.canResize ? _objectSpread2({}, column.getResizerProps()) : {}, {
        className: emotion.css(resizingStyles === null || resizingStyles === void 0 ? void 0 : resizingStyles.higTableHeaderResizer),
        onClick: event => event.stopPropagation()
      })), meta.sortColumns && column.id !== "selection" ? /*#__PURE__*/React__default["default"].createElement(SortColumns, {
        isSorted: column.isSorted,
        isSortedDesc: isSortedDesc,
        density: metadata.densityId
      }, meta.sortColumns) : "");
    })))), isGrouped && meta.dataGroupComponent && /*#__PURE__*/React__default["default"].createElement(DataGroupComponent, {
      styles: styles,
      groupNames: groupNames,
      count: count,
      data: data,
      dataGroup: /*#__PURE__*/React__default["default"].createElement(TableDataContents, {
        getTableBodyProps: getTableBodyProps,
        styles: styles,
        rowTypeToMap: rowTypeToMap,
        alternateBg: alternateBg,
        customContentArray: customContentArray,
        customStylesheet: customStylesheet,
        resolvedRoles: resolvedRoles,
        metadata: metadata,
        prepareRow: prepareRow,
        rowSpreadProps: rowSpreadProps,
        columnHeaderArray: columnHeaderArray,
        getOffset: getOffset,
        activeMultiSelectColumn: activeMultiSelectColumn,
        activeMultiSelectRowArray: activeMultiSelectRowArray,
        activeColumnIndex: activeColumnIndex,
        activeRowIndex: activeRowIndex,
        setActiveColumnIndex: setActiveColumnIndex,
        setActiveMultiSelectColumn: setActiveMultiSelectColumn,
        setActiveRowIndex: setActiveRowIndex,
        onTableCellClick: onTableCellClick,
        setAllMultiSelectedRows: setAllMultiSelectedRows,
        setActiveMultiSelectRowArray: setActiveMultiSelectRowArray,
        paginateDynamic: paginateDynamic,
        rows: rows,
        meta: meta,
        page: page,
        isGrouped: isGrouped,
        tableObject: tableObject,
        globalResizeStyles: globalResizeStyles,
        globalColumns: globalColumns,
        rowSelection: rowSelection
      }),
      activeMultiSelectRowArray: activeMultiSelectRowArray,
      setActiveMultiSelectRowArray: setActiveMultiSelectRowArray,
      allMultiSelectedRows: allMultiSelectedRows,
      setAllMultiSelectedRows: setAllMultiSelectedRows,
      getOffset: getOffset,
      checkboxToggle: checkboxToggle,
      setCheckboxToggle: setCheckboxToggle
    }, meta.dataGroupComponent), !isGrouped && /*#__PURE__*/React__default["default"].createElement(TableDataContents, {
      getTableBodyProps: getTableBodyProps,
      styles: styles,
      rowTypeToMap: rowTypeToMap,
      alternateBg: alternateBg,
      customContentArray: customContentArray,
      customStylesheet: customStylesheet,
      resolvedRoles: resolvedRoles,
      metadata: metadata,
      prepareRow: prepareRow,
      rowSpreadProps: rowSpreadProps,
      columnHeaderArray: columnHeaderArray,
      getOffset: getOffset,
      activeMultiSelectColumn: activeMultiSelectColumn,
      activeMultiSelectRowArray: activeMultiSelectRowArray,
      activeColumnIndex: activeColumnIndex,
      activeRowIndex: activeRowIndex,
      setActiveColumnIndex: setActiveColumnIndex,
      setActiveMultiSelectColumn: setActiveMultiSelectColumn,
      setActiveRowIndex: setActiveRowIndex,
      onTableCellClick: onTableCellClick,
      setAllMultiSelectedRows: setAllMultiSelectedRows,
      setActiveMultiSelectRowArray: setActiveMultiSelectRowArray,
      paginateDynamic: paginateDynamic,
      rows: rows,
      meta: meta,
      page: page,
      isGrouped: isGrouped,
      tableObject: tableObject,
      globalResizeStyles: globalResizeStyles,
      globalColumns: globalColumns,
      rowSelection: rowSelection
    })), !paginateDynamic && meta.paginationComponent && count === dataArray.length - 1 && /*#__PURE__*/React__default["default"].createElement(Pagination, {
      pageDetails: pageDetails
    }, meta.paginationComponent), paginateDynamic && meta.paginationDynamic && count === dataArray.length - 1 && /*#__PURE__*/React__default["default"].createElement(Pagination, {
      pageDetails: pageDetails
    }, meta.paginationDynamic));
  });
};

RenderTable.propTypes = {
  params: PropTypes__default["default"].any,
  passedData: PropTypes__default["default"].any,
  passedCount: PropTypes__default["default"].any
};

const _excluded$1 = ["alternateBg", "columnSelection", "frozenHeader", "frozenHeaderCount", "headerBackgroundColor", "headerRowSpreadProps", "paginateDynamic", "rowSpreadProps", "rowSelection", "setHeaderRef", "setTableRef", "setTotalRows", "tableObject", "tableSpreadProps", "onTableCellClick", "onSortClick", "stylesheet", "tableGroupSelectAll"];

const TablePresenter = _ref => {
  let {
    alternateBg,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    headerBackgroundColor,
    headerRowSpreadProps,
    paginateDynamic,
    rowSpreadProps,
    rowSelection,
    setHeaderRef,
    setTableRef,
    setTotalRows,
    tableObject,
    tableSpreadProps,
    onTableCellClick,
    onSortClick,
    stylesheet: customStylesheet,
    tableGroupSelectAll
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, _excluded$1);

  const {
    columns,
    data: dataArray,
    meta,
    groupNames = [],
    hiddenColumns,
    defaultSelectedRows
  } = React.useMemo(() => tableObject, [tableObject]);
  const isGrouped = Array.isArray(dataArray[0]);
  const passedParams = {
    dataArray,
    isGrouped,
    columns,
    meta,
    groupNames,
    hiddenColumns,
    defaultSelectedRows,
    alternateBg,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    headerBackgroundColor,
    headerRowSpreadProps,
    paginateDynamic,
    rowSpreadProps,
    rowSelection,
    setHeaderRef,
    setTableRef,
    setTotalRows,
    tableObject,
    tableSpreadProps,
    onTableCellClick,
    onSortClick,
    customStylesheet,
    tableGroupSelectAll,
    otherProps
  };

  if (!isGrouped) {
    return /*#__PURE__*/React__default["default"].createElement(RenderTable, {
      params: passedParams
    });
  }

  const tableRender = dataArray === null || dataArray === void 0 ? void 0 : dataArray.map((data, count) => /*#__PURE__*/React__default["default"].createElement(RenderTable, {
    params: passedParams,
    passedData: data,
    passedCount: count,
    key: count
  }));
  return tableRender;
};

TablePresenter.propTypes = {
  alternateBg: PropTypes__default["default"].bool,
  headerBackgroundColor: PropTypes__default["default"].string,
  columnSelection: PropTypes__default["default"].bool,
  frozenHeader: PropTypes__default["default"].bool,
  frozenHeaderCount: PropTypes__default["default"].number,
  headerRowSpreadProps: PropTypes__default["default"].any,
  rowSelection: PropTypes__default["default"].bool,
  rowSpreadProps: PropTypes__default["default"].any,
  setHeaderRef: PropTypes__default["default"].func,
  setTableRef: PropTypes__default["default"].func,
  setTotalRows: PropTypes__default["default"].func,
  tableObject: PropTypes__default["default"].any.isRequired,
  tableSpreadProps: PropTypes__default["default"].any,
  paginateDynamic: PropTypes__default["default"].bool,
  onTableCellClick: PropTypes__default["default"].func,
  onSortClick: PropTypes__default["default"].func,
  checkboxToggle: PropTypes__default["default"].func,
  setCheckboxToggle: PropTypes__default["default"].func,
  stylesheet: PropTypes__default["default"].func,
  tableGroupSelectAll: PropTypes__default["default"].shape({
    checkboxToggle: PropTypes__default["default"].arrayOf(PropTypes__default["default"].bool),
    setCheckboxToggle: PropTypes__default["default"].func
  })
};

const _excluded = ["paginateDynamic", "tableObject"];

const verticalScrollInViewport = cell => {
  const cellBounding = cell.getBoundingClientRect();

  if (cellBounding.top < 0 || cellBounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
    // align to the top if the top of cell is out of the viewport
    if (cellBounding.top < 0) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    } // align to the bottom if the bottom of cell is out of the viewport


    if (cellBounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }
  }
};

const horizontalScrollInViewport = cell => {
  const cellBounding = cell.getBoundingClientRect();

  if (cellBounding.left < 0 || cellBounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
    if (cellBounding.left < 0) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }

    if (cellBounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
      cell.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }
  }
};

const verticalScrollInContainer = (cell, table, bottomOffset) => {
  if (cell && table.scrollHeight > table.clientHeight) {
    const scrollBottom = table.clientHeight + table.scrollTop;
    const elementBottom = cell.offsetTop + cell.offsetHeight;

    if (elementBottom + bottomOffset > scrollBottom) {
      // eslint-disable-next-line no-param-reassign
      table.scrollTop = elementBottom + bottomOffset - table.clientHeight;
    }

    if (cell.offsetTop < table.scrollTop) {
      // eslint-disable-next-line no-param-reassign
      table.scrollTop = cell.offsetTop;
    }
  }
};

const horizontalScrollInContainer = (cell, table) => {
  if (cell && table.scrollWidth > table.clientWidth) {
    const scrollRight = table.clientWidth + table.scrollLeft;
    const elementRight = cell.offsetLeft + cell.offsetWidth;

    if (elementRight > scrollRight) {
      // eslint-disable-next-line no-param-reassign
      table.scrollLeft = elementRight - table.clientWidth;
    }

    if (cell.offsetLeft < table.scrollLeft) {
      // eslint-disable-next-line no-param-reassign
      table.scrollLeft = cell.offsetLeft;
    }
  }
};

const checkVerticalScroll = (cellObject, table, bottomOffset) => {
  verticalScrollInViewport(cellObject);
  verticalScrollInContainer(cellObject, table, bottomOffset);
};

const checkHorizontalScroll = (cellObject, table) => {
  horizontalScrollInViewport(cellObject);
  horizontalScrollInContainer(cellObject, table);
};

const getCellObject = (activeColumnIndex, activeRowIndex) => `[data-cell-coords="${activeColumnIndex}_${activeRowIndex}"]`;

const getHeaders = columns => {
  const headers = columns.map(item => {
    if (item.columns) {
      return getHeaders(item.columns);
    }

    return item.Header;
  });
  return [].concat(...headers);
};

function TableBehavior(props) {
  const {
    paginateDynamic,
    tableObject
  } = props,
        otherProps = _objectWithoutProperties(props, _excluded);

  const {
    onKeyDown
  } = otherProps;
  const [totalRows, setTotalRows] = React.useState(tableObject.data.length); // An array of Header title strings

  const [columnHeaderArray, setColumnHeaderArray] = React.useState(getHeaders(tableObject.columns));
  const [activeColumnIndex, setActiveColumnIndex] = React.useState(null);
  const [activeMultiSelectColumn, setActiveMultiSelectColumn] = React.useState(null);
  const [activeMultiSelectRowArray, setActiveMultiSelectRowArray] = React.useState(null);
  const [allMultiSelectedRows, setAllMultiSelectedRows] = React.useState(false);
  const [activeRowIndex, setActiveRowIndex] = React.useState(null);
  const [internalTableRef, setInternalTableRef] = React.useState(null);
  const [internalHeaderRef, setInternalHeaderRef] = React.useState(null); // An array of the header objects from react-table

  const [globalColumns, setGlobalColumns] = React.useState(null);
  const [globalResizeStyles, setGlobalResizeStyles] = React.useState(null);

  const setTableRef = element => {
    if (props.tableRef) {
      props.tableRef(element);
    }

    setInternalTableRef(element);
  };

  const setHeaderRef = element => {
    setInternalHeaderRef(element);
  };

  const handleKeyDown = React.useCallback(event => {
    var _internalHeaderRef$ch;

    const {
      columnSelection,
      rowHeight,
      rowSelection
    } = props;
    const columnStart = rowSelection ? -1 : 0;
    const rowStart = columnSelection ? -1 : 0;
    const headerMultiplier = internalHeaderRef === null || internalHeaderRef === void 0 ? void 0 : (_internalHeaderRef$ch = internalHeaderRef.children) === null || _internalHeaderRef$ch === void 0 ? void 0 : _internalHeaderRef$ch.length;
    const height = Number(rowHeight.replace("px", ""));
    const scrollDownOffset = headerMultiplier * height + 1;

    if (onKeyDown) {
      onKeyDown(event);
    }

    setActiveMultiSelectColumn(null);

    if (!activeColumnIndex) {
      setActiveColumnIndex(0);
    }

    if (!activeRowIndex) {
      setActiveRowIndex(0);
    }

    switch (event.code) {
      case "ArrowDown":
        if (totalRows !== activeRowIndex + 1) {
          setActiveRowIndex(activeRowIndex + 1);
          checkVerticalScroll(document.querySelector(getCellObject(activeColumnIndex, activeRowIndex + 1)), internalTableRef, scrollDownOffset);
        }

        event.preventDefault();
        break;

      case "ArrowUp":
        if (activeRowIndex !== rowStart && activeColumnIndex !== -1 || activeColumnIndex === -1 && activeRowIndex >= 0) {
          setActiveRowIndex(activeRowIndex - 1);
          checkVerticalScroll(document.querySelector(getCellObject(activeColumnIndex, activeRowIndex - 1)), internalTableRef, scrollDownOffset);
        }

        event.preventDefault();
        break;

      case "ArrowLeft":
        if (activeColumnIndex !== columnStart) {
          setActiveColumnIndex(activeColumnIndex - 1);
          checkHorizontalScroll(document.querySelector(getCellObject(activeColumnIndex - 1, activeRowIndex)), internalTableRef);
        }

        event.preventDefault();
        break;

      case "ArrowRight":
        if (columnHeaderArray.length !== activeColumnIndex + 1) {
          setActiveColumnIndex(activeColumnIndex + 1);
          checkHorizontalScroll(document.querySelector(getCellObject(activeColumnIndex + 1, activeRowIndex)), internalTableRef);
        }

        event.preventDefault();
        break;

      case "Enter":
        if (activeRowIndex > -1 && activeColumnIndex === -1) {
          /**
           * Look into consolidating this w/ the row select onClick
           */
          const newArray = activeMultiSelectRowArray !== null && activeMultiSelectRowArray !== void 0 && activeMultiSelectRowArray.includes(activeRowIndex) ? activeMultiSelectRowArray.filter(item => item !== activeRowIndex) : activeMultiSelectRowArray && [...activeMultiSelectRowArray] || [];

          if (!(activeMultiSelectRowArray !== null && activeMultiSelectRowArray !== void 0 && activeMultiSelectRowArray.includes(activeRowIndex))) {
            newArray.push(activeRowIndex);
          }

          if (totalRows === newArray.length) {
            setAllMultiSelectedRows(true);
          } else {
            setAllMultiSelectedRows(false);
          }

          setActiveMultiSelectRowArray(newArray);
        }

        if (activeRowIndex === -1 && activeColumnIndex === -1) {
          const allArray = tableObject.data.map((row, index) => index);
          const emptyArray = [];

          if (allMultiSelectedRows || (activeMultiSelectRowArray === null || activeMultiSelectRowArray === void 0 ? void 0 : activeMultiSelectRowArray.length) > 0) {
            setActiveMultiSelectRowArray(emptyArray);
            setAllMultiSelectedRows(false);
          } else {
            setActiveMultiSelectRowArray(allArray);
            setAllMultiSelectedRows(true);
          }
        }

        if (columnSelection && activeColumnIndex > -1) {
          setActiveMultiSelectColumn(activeColumnIndex);
        }

        break;
    }
  }, [activeColumnIndex, activeMultiSelectRowArray, activeRowIndex, allMultiSelectedRows, setActiveRowIndex, setActiveColumnIndex]);
  React.useEffect(() => {
    setColumnHeaderArray(getHeaders(tableObject.columns));
  }, [tableObject]);
  return props.children({
    activeColumnIndex,
    activeRowIndex,
    activeMultiSelectColumn,
    activeMultiSelectRowArray,
    allMultiSelectedRows,
    columnHeaderArray,
    handleKeyDown,
    setActiveColumnIndex,
    setActiveRowIndex,
    setActiveMultiSelectColumn,
    setActiveMultiSelectRowArray,
    setAllMultiSelectedRows,
    setColumnHeaderArray,
    setHeaderRef,
    setTableRef,
    setTotalRows,
    globalColumns,
    setGlobalColumns,
    globalResizeStyles,
    setGlobalResizeStyles
  });
}

/* eslint-disable react/forbid-prop-types */

const Table = props => {
  const {
    alternateBg,
    headerBackgroundColor,
    columnSelection,
    frozenHeader,
    frozenHeaderCount,
    headerRowSpreadProps,
    rowSelection,
    rowSpreadProps,
    tableObject,
    tableSpreadProps,
    paginateDynamic,
    onTableCellClick,
    onSortClick,
    stylesheet,
    tableGroupSelectAll = {}
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.ThemeContext.Consumer, null, _ref => {
    let {
      resolvedRoles,
      metadata
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(TableBehavior, {
      columnSelection: columnSelection,
      frozenHeader: frozenHeader,
      rowHeight: resolvedRoles["table.cell.minHeight"],
      rowSelection: rowSelection,
      tableObject: tableObject
    }, _ref2 => {
      let {
        activeColumnIndex,
        activeMultiSelectColumn,
        activeMultiSelectRowArray,
        activeRowIndex,
        allMultiSelectedRows,
        columnHeaderArray,
        handleKeyDown,
        setActiveColumnIndex,
        setActiveMultiSelectColumn,
        setActiveMultiSelectRowArray,
        setActiveRowIndex,
        setAllMultiSelectedRows,
        setColumnHeaderArray,
        setHeaderRef,
        setTableRef,
        setTotalRows,
        globalColumns,
        setGlobalColumns,
        globalResizeStyles,
        setGlobalResizeStyles
      } = _ref2;
      return /*#__PURE__*/React__default["default"].createElement(TablePresenter, {
        alternateBg: alternateBg,
        columnSelection: columnSelection,
        frozenHeader: frozenHeader,
        frozenHeaderCount: frozenHeaderCount,
        headerBackgroundColor: headerBackgroundColor,
        headerRowSpreadProps: headerRowSpreadProps,
        rowSpreadProps: rowSpreadProps,
        rowSelection: rowSelection,
        tableObject: tableObject,
        activeColumnIndex: activeColumnIndex,
        activeMultiSelectColumn: activeMultiSelectColumn,
        activeMultiSelectRowArray: activeMultiSelectRowArray,
        activeRowIndex: activeRowIndex,
        allMultiSelectedRows: allMultiSelectedRows,
        columnHeaderArray: columnHeaderArray,
        handleKeyDown: handleKeyDown,
        setActiveColumnIndex: setActiveColumnIndex,
        setActiveMultiSelectColumn: setActiveMultiSelectColumn,
        setActiveMultiSelectRowArray: setActiveMultiSelectRowArray,
        setActiveRowIndex: setActiveRowIndex,
        setAllMultiSelectedRows: setAllMultiSelectedRows,
        setColumnHeaderArray: setColumnHeaderArray,
        setHeaderRef: setHeaderRef,
        setTableRef: setTableRef,
        setTotalRows: setTotalRows,
        tableSpreadProps: tableSpreadProps,
        paginateDynamic: paginateDynamic,
        onTableCellClick: onTableCellClick,
        onSortClick: onSortClick,
        stylesheet: stylesheet,
        globalColumns: globalColumns,
        setGlobalColumns: setGlobalColumns,
        globalResizeStyles: globalResizeStyles,
        setGlobalResizeStyles: setGlobalResizeStyles,
        tableGroupSelectAll: tableGroupSelectAll
      });
    });
  });
};

Table.defaultProps = {
  paginateDynamic: true
};
Table.propTypes = {
  /**
   * Alternating background stripes
   */
  alternateBg: PropTypes__default["default"].bool,

  /**
   * Turns on column selection
   */
  columnSelection: PropTypes__default["default"].bool,

  /**
   * Turns on a "sticky" header row for scrolling
   */
  frozenHeader: PropTypes__default["default"].bool,

  /**
   * Set how many rows to be visible when the header is frozen.
   * Default is 50 rows.
   */
  frozenHeaderCount: PropTypes__default["default"].number,

  /**
   * The header background color has an opacity so the color should
   * be dictated by the surface it is on. But for scrolling for columns
   * to not show beneath the columns and opaque background is needed
   * between the content and header, this prop allows you to set that
   * background.
   * Default is colorScheme.surface.level100
   */
  headerBackgroundColor: PropTypes__default["default"].string,

  /**
   * Additional props that will be spread to each header row's root element
   */
  headerRowSpreadProps: PropTypes__default["default"].any,

  /**
   * Called when table sort is clicked
   */
  onSortClick: PropTypes__default["default"].func,

  /**
   * Called when a table cell is clicked
   */
  onTableCellClick: PropTypes__default["default"].func,

  /**
   * Controls whether to show all table rows or allow for user to
   * set up pagination
   */
  paginateDynamic: PropTypes__default["default"].bool,

  /**
   * Turns on row selection
   */
  rowSelection: PropTypes__default["default"].bool,

  /**
   * Additional props that will be spread to each row's root element
   */
  rowSpreadProps: PropTypes__default["default"].any,

  /**
   * Adds custom/overriding styles
   */
  stylesheet: PropTypes__default["default"].func,

  /**
   * Data object for the table contents
   */
  tableObject: PropTypes__default["default"].any.isRequired,

  /**
   * Additional props that will be spread to the table's root element
   */
  tableSpreadProps: PropTypes__default["default"].any,

  /**
   * Optional prop for grouped data, if present will
   * add functionality to select all by data type group
   */
  tableGroupSelectAll: PropTypes__default["default"].shape({
    /**
     * Array that tracks toggle state for each group checkbox
     */
    checkboxToggle: PropTypes__default["default"].arrayOf(PropTypes__default["default"].bool),

    /**
     * Method that sets toggle value on/off for group
     */
    setCheckboxToggle: PropTypes__default["default"].func
  })
};
Table.__docgenInfo = {
  "description": "",
  "displayName": "Table",
  "props": {
    "alternateBg": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Alternating background stripes"
    },
    "columnSelection": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Turns on column selection"
    },
    "frozenHeader": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Turns on a \"sticky\" header row for scrolling"
    },
    "frozenHeaderCount": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Set how many rows to be visible when the header is frozen.\r\nDefault is 50 rows."
    },
    "headerBackgroundColor": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "The header background color has an opacity so the color should\r\nbe dictated by the surface it is on. But for scrolling for columns\r\nto not show beneath the columns and opaque background is needed\r\nbetween the content and header, this prop allows you to set that\r\nbackground.\r\nDefault is colorScheme.surface.level100"
    },
    "headerRowSpreadProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Additional props that will be spread to each header row's root element"
    },
    "onSortClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Called when table sort is clicked"
    },
    "onTableCellClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Called when a table cell is clicked"
    },
    "paginateDynamic": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Controls whether to show all table rows or allow for user to\r\nset up pagination",
      "defaultValue": {
        "value": "true",
        "computed": false
      }
    },
    "rowSelection": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Turns on row selection"
    },
    "rowSpreadProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Additional props that will be spread to each row's root element"
    },
    "stylesheet": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Adds custom/overriding styles"
    },
    "tableObject": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": "Data object for the table contents"
    },
    "tableSpreadProps": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": "Additional props that will be spread to the table's root element"
    },
    "tableGroupSelectAll": {
      "type": {
        "name": "shape",
        "value": {
          "checkboxToggle": {
            "name": "arrayOf",
            "value": {
              "name": "bool"
            },
            "description": "Array that tracks toggle state for each group checkbox",
            "required": false
          },
          "setCheckboxToggle": {
            "name": "func",
            "description": "Method that sets toggle value on/off for group",
            "required": false
          }
        }
      },
      "required": false,
      "description": "Optional prop for grouped data, if present will\r\nadd functionality to select all by data type group"
    }
  }
};

exports["default"] = Table;
