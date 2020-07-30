import React, { useReducer, useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";

function ConfirmModal(props) {
  const { errorOpen } = props;
  console.log("props in confirm modal: ", errorOpen);

  //history, match, location
  function closeModal(event) {
    let errorOpen = false;
    let tag = event.target;

    if (tag.tagName === "SPAN") {
      props.closeModal(errorOpen);
    }
    if (tag.className === "modal-wrapper-error") {
      props.closeModal(errorOpen);
    }
  }

  return (
    <div>
      {errorOpen ? (
        <>
          <div className="modal-overlay-error" />
          <div
            onClick={closeModal}
            className="modal-wrapper-error"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-error">
              <div className="modal-header-error">
                <button
                  type="button"
                  className="modal-close-button-error"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span onClick={closeModal} aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              {/*<div className="topErrorWrap" style={{ opacity: "1" }}>
                <h1>Error Message</h1>
              </div>*/}
              <div className="middleErrorWrap">
                <p>Your information was saved. &nbsp;</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default withRouter(ConfirmModal);
