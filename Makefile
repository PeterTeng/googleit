TESTS = $(shell find test/test.*.js)

test:
	@./test/runner.sh $(TESTS)

.PHONY: test
