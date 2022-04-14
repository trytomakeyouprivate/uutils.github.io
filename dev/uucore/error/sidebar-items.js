initSidebarItems({"fn":[["get_exit_code","Get the last exit code set with [`set_exit_code`]. The default value is `0`."],["set_exit_code","Set the exit code for the program if `uumain` returns `Ok(())`."],["strip_errno","Strip the trailing “ (os error XX)“ from io error strings."]],"macro":[["uio_error","Shorthand to construct [`UIoError`]-instances."]],"struct":[["ExitCode","A special error type that does not print any message when returned from `uumain`. Especially useful for porting utilities to using [`UResult`]."],["UIoError","Wrapper type around [`std::io::Error`]."],["USimpleError","A simple error type with an exit code and a message that implements [`UError`]."],["UUsageError",""]],"trait":[["FromIo","Enables the conversion from [`std::io::Error`] to [`UError`] and from [`std::io::Result`] to [`UResult`]."],["UError","Custom errors defined by the utils and `uucore`."]],"type":[["UResult","Result type that should be returned by all utils."]]});