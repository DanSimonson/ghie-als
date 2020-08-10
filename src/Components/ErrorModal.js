import React, { useReducer, useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";
import { AlsContext } from "../Context/AlsContext";

function ErrorModal(props) {
  const { errorOpen, errMessage } = props;

  function closeModal(event) {
    let errorOpen = false;
    let tag = event.target;

    if (tag.tagName === "SPAN") {
      props.closeModal(errorOpen);
    }
    if (tag.className === "modal-wrapper-errors") {
      props.closeModal(errorOpen);
    }
  }

  return (
    <div>
      {errorOpen ? (
        <>
          <div className="modal-overlay-errors" />
          <div
            onClick={closeModal}
            className="modal-wrapper-errors"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-errors">
              <div className="modal-header-errors">
                <button
                  type="button"
                  className="modal-close-button-errors"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span onClick={closeModal} aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              <div className="middleErrorWraps">
                <h1>Error Message</h1>
                <p>{errMessage} &nbsp;</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default withRouter(ErrorModal);
