"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./index");
jest.mock("fs");
const mockReaddir = node_fs_1.default.promises.readdir;
/*
/*
const mockLstat = fs.promises.lstat as jest.MockedFunction<
  typeof fs.promises.lstat
>;
const mockMkdirSync = fs.mkdirSync as jest.MockedFunction<typeof fs.mkdirSync>;
const mockOpenSync = fs.openSync as jest.MockedFunction<typeof fs.openSync>;
*/
const testDir = path_1.default.join(__dirname, "test-dir");
const testFile = path_1.default.join(testDir, "test-file.txt");
describe("listDirContents", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("lists the contents of a directory", () => __awaiter(void 0, void 0, void 0, function* () {
        //mockReaddir.mockResolvedValue([new fs.Dirent(), new fs.Dirent()]);
        const mockDir = ["file1.txt", "file2.txt"];
        // Use `mockResolvedValue` to mock the return value of `readdir()`
        node_fs_1.default.promises.readdir.mockResolvedValue(mockDir);
        /*
        mockLstat.mockResolvedValue({
          size: 100,
          birthtime: new Date("2023-04-25T12:34:56.789Z"),
        });
         */
        yield (0, index_1.listDirContents)(testDir);
        expect(node_fs_1.default.promises.readdir).toHaveBeenCalledWith(testDir);
        /*
        expect(mockLstat).toHaveBeenNthCalledWith(
          1,
          path.join(testDir, "file1.txt")
        );
        expect(mockLstat).toHaveBeenNthCalledWith(
          2,
          path.join(testDir, "file2.txt")
        );*/
        /*
        expect(console.table).toHaveBeenCalledWith([
          {
            filename: "file1.txt",
            "size(KB)": 0.09765625,
            created_at: "2023-04-25T12:34:56.789Z",
          },
          {
            filename: "file2.txt",
            "size(KB)": 0.09765625,
            created_at: "2023-04-25T12:34:56.789Z",
          },
        ]);
        */
    }));
});
/*
describe("listDirContents", () => {
  test("should call fs.promises.readdir with filepath argument", async () => {
    const readdirMock = jest
      .spyOn(fs.promises, "readdir")
      .mockResolvedValue([]);
    const lstatMock = jest.spyOn(fs.promises, "lstat").mockResolvedValue({
      size: 1024,
      birthtime: new Date(),
    });
    const consoleTableMock = jest
      .spyOn(console, "table")
      .mockImplementation(() => {});

    await listDirContents("test-path");

    expect(readdirMock).toHaveBeenCalledWith("test-path");
    expect(lstatMock).toHaveBeenCalledTimes(1);
    expect(consoleTableMock).toHaveBeenCalledTimes(1);
  });
});
/*

  test("should console.error if fs.promises.readdir throws an error", async () => {
    const readdirMock = jest
      .spyOn(fs.promises, "readdir")
      .mockRejectedValue(new Error("test error"));
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await listDirContents("test-path");

    expect(readdirMock).toHaveBeenCalledWith("test-path");
    expect(consoleErrorMock).toHaveBeenCalledWith(expect.any(Error));
  });
});

describe("createDir", () => {
  test("should call fs.existsSync and fs.mkdirSync if directory does not exist", () => {
    const existsSyncMock = jest.spyOn(fs, "existsSync").mockReturnValue(false);
    const mkdirSyncMock = jest
      .spyOn(fs, "mkdirSync")
      .mockImplementation(() => {});
    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    createDir("test-path");

    expect(existsSyncMock).toHaveBeenCalledWith("test-path");
    expect(mkdirSyncMock).toHaveBeenCalledWith("test-path");
    expect(consoleLogMock).toHaveBeenCalledWith(
      "The directory has been created successfully"
    );
  });

  test("should not call fs.mkdirSync if directory already exists", () => {
    const existsSyncMock = jest.spyOn(fs, "existsSync").mockReturnValue(true);
    const mkdirSyncMock = jest
      .spyOn(fs, "mkdirSync")
      .mockImplementation(() => {});
    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    createDir("test-path");

    expect(existsSyncMock).toHaveBeenCalledWith("test-path");
    expect(mkdirSyncMock).not.toHaveBeenCalled();
    expect(consoleLogMock).not.toHaveBeenCalled();
  });
});

describe("createFile", () => {
  test("should call fs.openSync to create an empty file", () => {
    const openSyncMock = jest
      .spyOn(fs, "openSync")
      .mockImplementation(() => {});
    const consoleLogMock = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    createFile("test-file");

    expect(openSyncMock).toHaveBeenCalledWith("test-file", "w");
    expect(consoleLogMock).toHaveBeenCalledWith(
      "An empty file has been created"
    );
  });
});

// Note: You may want to add more tests to cover edge cases and error scenarios.

*/
//# sourceMappingURL=index.test.js.map