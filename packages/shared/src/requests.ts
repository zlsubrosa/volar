/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
	RequestType,
	NotificationType,
	TextDocumentPositionParams,
	TextDocumentIdentifier,
	FormattingOptions,
	Position,
	Location,
	DocumentUri,
	Range,
	RequestType0,
	NotificationType0,
	SemanticTokensLegend,
	SemanticTokens,
} from 'vscode-languageserver/node';

export interface ISourceMap {
	languageId: string;
	content: string;
	vueRegion: string;
	mappings: {
		sourceRange: {
			start: number;
			end: number;
		};
		targetRange: {
			start: number;
			end: number;
		};
	}[],
}

export namespace D3Request {
	export const type: RequestType<TextDocumentIdentifier, string | null | undefined, any> = new RequestType('volar/d3');
}
export namespace TagCloseRequest {
	export const type: RequestType<TextDocumentPositionParams, string | null | undefined, any> = new RequestType('html/tag');
}
export namespace LinkedEditingRangeRequest {
	export const type: RequestType<TextDocumentPositionParams, Range[] | null, any> = new RequestType('html/linkedEditingRange');
}
export namespace DocumentVersionRequest {
	export const type: RequestType<{
		uri: string,
	}, number | undefined, any> = new RequestType('vue/docUpdated');
}
export namespace GetFormattingSourceMapsRequest {
	export const type: RequestType<{
		textDocument: TextDocumentIdentifier,
	}, {
		templates: ISourceMap[],
		scripts: ISourceMap[],
		styles: ISourceMap[],
	} | undefined, any> = new RequestType('vue/descriptor');
}
export namespace VerifyAllScriptsRequest {
	export const type: RequestType<undefined, undefined, any> = new RequestType('volar.action.verifyAllScripts');
}
export namespace FormatAllScriptsRequest {
	export const type: RequestType<FormattingOptions, undefined, any> = new RequestType('volar.action.formatAllScripts');
}
export namespace WriteVirtualFilesRequest {
	export const type: RequestType<undefined, undefined, any> = new RequestType('volar.action.writeVirtualFiles');
}

export namespace RestartServerNotification {
	export const type: NotificationType<undefined> = new NotificationType('volar.action.restartServer');
}
export namespace ShowReferencesNotification {
	export const type: NotificationType<{ uri: DocumentUri, position: Position, references: Location[] }> = new NotificationType('vue.findReferences');
}

// semantic tokens
export namespace RangeSemanticTokensRequest {
	export const type: RequestType<{
		textDocument: TextDocumentIdentifier;
		range: Range;
	}, SemanticTokens | undefined, any> = new RequestType('vue.semanticTokens');
}
export namespace SemanticTokenLegendRequest {
	export const type: RequestType0<SemanticTokensLegend, any> = new RequestType0('vue.semanticTokenLegend');
}
export namespace SemanticTokensChangedNotification {
	export const type: NotificationType0 = new NotificationType0('vue.semanticTokensChanged');
}
