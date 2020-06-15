import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus userStatus="I'm ok"/>);
        const instance = component.getInstance();
        expect(instance.state.userStatus).toBe("I'm ok")
    })
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus userStatus="I'm ok"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull()
    })
    test("after creation in the span should be 'I'm ok' ", () => {
        const component = create(<ProfileStatus userStatus="I'm ok"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("I'm ok")
    })
    test("after creation input should't be displayed ", () => {
        const component = create(<ProfileStatus userStatus="I'm ok"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow()
    })
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus userStatus="I'm ok"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        expect(() => {
            let span = root.findByType("span");
        }).toThrow()
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus userStatus="I'm ok" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})