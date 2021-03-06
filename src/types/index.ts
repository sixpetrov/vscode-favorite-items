import { QuickPickItem } from "vscode";
import { DataProvider } from "../class/dataProvider";
import { ViewItem } from "../class/view-item";

export enum ResourceType {
    File = "File",
    Group = "Group",
    Directory = "Directory",

}

export interface StoredResource {
    id?: string;
    name: string;
    type: ResourceType;
    parent_id?: string;
    contents?: string[];
    label?: string;
    workspacePath?: string;
    iconColor?: string;
    iconPath?: string;
}

export interface FilesystemResource {
    path: string;
    type: ResourceType;
}

export interface GroupQuickPick extends QuickPickItem {
    id: string;
}

export interface TreeProviders {
    explorer: DataProvider;
    activity: DataProvider;
    refresh: () => void;
}

export interface ClipboardBuffer {
    item: ViewItem;
    operation: "copy" | "cut";
}

export interface HtmlColor {
    [key: string]: string;
}
