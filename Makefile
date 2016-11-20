TESTS = $(shell find test/test.*.js)

test:
	@./test/runner.sh $(TESTS)

.PHONY: test

install:
	which npm && npm install -g googleit

dev-install:
	which googleit && npm uninstall -g googleit
	npm link
